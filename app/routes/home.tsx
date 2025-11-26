import { Link } from "@remix-run/react";
import React from "react";
import pickles from "../assets/Pickle.jpg";
import Mappings, { ConditionalUI, TodoApp, UserCard } from "./practise";
import Controlled from "./practise";
import { Card } from "~/components/Card";

const Home = () => {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Card>
            <h1>Hey i am a card Component</h1>
            <h2>Please Dont touch me !!!</h2>
          </Card>

          <div className="space-y-6">
            <p className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Fresh Batch — Limited Release
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Handcrafted pickles, small-batch flavor.
            </h1>
            <p className="text-gray-600 max-w-xl">
              PickleCo crafts flavorful, all-natural pickles—fermented or
              brined—made locally with seasonal produce. Shop jars, order
              wholesale, or discover recipes and pairings.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/posts"
                className="bg-[#4B5945] text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
              >
                Shop Pickles
              </Link>
              <Link
                to="/recipes"
                className="border border-gray-200 px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                View Recipes
              </Link>
            </div>

            <div
              id="features"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Small-Batch</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Handmade jars for consistent flavor.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">All-Natural</h4>
                <p className="text-sm text-gray-500 mt-1">
                  No artificial preservatives or colors.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Custom Orders</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Catering and wholesale for events.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={pickles}
              alt="jar of pickles"
              className="w-full max-w-md shadow-lg rounded-2xl"
            />
          </div>
        </section>

        <section className="border-t">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h3 className="text-2xl font-semibold">Why PickleCo?</h3>
              <p className="text-gray-600 mt-2">
                We focus on flavor, sustainability, and community. From seasonal
                batches to tried-and-true classics, we make pickles you'll reach
                for again and again.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Link
                to="/products"
                className="bg-[#4B5945] text-white px-4 py-2 rounded-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-8 bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <span>© {new Date().getFullYear()} PickleCo</span>
            <div className="flex gap-4 mt-3 md:mt-0">
              <Link to="/recipes" className="hover:text-gray-900">
                Recipes
              </Link>
              <Link to="/products" className="hover:text-gray-900">
                Products
              </Link>
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
            </div>
          </div>
        </footer>
        {/* <UserCard name="Vinay" role="Cloud Native Engineer"/> */}
        {/* <Mappings /> */}
        {/* <TodoApp isLoggedIn={true} /> */}
        {/* <Controlled/> */}
      </main>
    </>
  );
};

export default Home;
