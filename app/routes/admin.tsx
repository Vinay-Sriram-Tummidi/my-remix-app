import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { prisma } from "../utils/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";
  const filter = url.searchParams.get("filter") || "all";
  const sort = url.searchParams.get("sort") || "newest";

  let products = await prisma.product.findMany();

  if (filter !== "all") {
    products = products.filter((p) =>
      filter === "in" ? p.inStock : !p.inStock
    );
  }

  if (query) {
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.description || "").toLowerCase().includes(query)
    );
  }

  if (sort === "price-asc") products.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") products.sort((a, b) => b.price - a.price);
  else products.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return json({ products });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const _action = formData.get("_action");

  if (_action === "add" || _action === "edit") {
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString() ?? "";
    const price = Number(formData.get("price"));
    const description = formData.get("description")?.toString();
    const image = formData.get("image")?.toString();
    const inStock = formData.get("inStock") === "on";

    if (!name || isNaN(price)) {
      throw new Error("Invalid product data");
    }

    if (_action === "add") {
      await prisma.product.create({
        data: { name, price, description, image, inStock },
      });
    } else if (_action === "edit" && id) {
      await prisma.product.update({
        where: { id },
        data: { name, price, description, image, inStock },
      });
    }
  }

  if (_action === "delete") {
    const id = formData.get("id")?.toString();
    if (id) await prisma.product.delete({ where: { id } });
  }

  return redirect("/admin");
}

export default function Admin() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        {/* Add Form */}
        <Form method="post" className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-3">Add Product</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="border p-2 rounded" />
            <input name="price" placeholder="Price" type="number" className="border p-2 rounded" />
          </div>
          <textarea name="description" placeholder="Description" className="border p-2 rounded w-full mt-2" />
          <input name="image" placeholder="Image URL" className="border p-2 rounded w-full mt-2" />
          <label className="flex items-center gap-2 mt-2">
            <input name="inStock" type="checkbox" defaultChecked /> In Stock
          </label>
          <button
            type="submit"
            name="_action"
            value="add"
            className="mt-3 bg-[#4B5945] text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </Form>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.description}</p>
                  <p className="text-sm font-medium mt-1">₹{p.price}</p>
                </div>
                <Form method="post">
                  <input type="hidden" name="id" value={p.id} />
                  <button
                    type="submit"
                    name="_action"
                    value="delete"
                    className="text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </Form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
