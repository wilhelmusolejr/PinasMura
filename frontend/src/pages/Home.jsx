import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigator from "../components/Navigator";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";

export default function Home() {
  document.title = "Home | PinasMura";

  return (
    <>
      <Navigator />

      <header className="container mx-auto mb-10 mt-32 flex min-h-60 flex-col justify-center px-5">
        <h1 className="pb-2 text-4xl font-bold md:pb-5 md:text-6xl">
          Get Inspired
        </h1>
        <p className="w-full text-base font-medium md:w-4/5 lg:w-3/5">
          {`Browsing for your next long-haul trip, everyday journey, or just fancy
        a look at what's new? From community favourites to about-to-sell-out
        items, see them all here!`}
        </p>
      </header>

      <div className="container mx-auto my-10 px-5">
        <div className="scrollbar-hide flex flex-row gap-3 overflow-x-auto pb-5">
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Category</span>
              <p className="whitespace-nowrap">All Categories</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Color</span>
              <p className="whitespace-nowrap">All Color</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Features</span>
              <p className="whitespace-nowrap">All Features</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-10 px-5">
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>

        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </section>

      <section className="container mx-auto my-40 px-5">
        <div className="flex flex-wrap gap-3 md:flex-nowrap lg:gap-5">
          {/* product slider */}
          <ProductSlider />
          {/* product slider */}
          <ProductSlider />
        </div>
      </section>

      <section className="container mx-auto my-10 px-5">
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>

        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </section>

      <Footer />
    </>
  );
}
