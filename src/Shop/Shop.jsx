import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ProductAPI from "../API/ProductAPI";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";
import Products from "./Component/Products";
import SortProduct from "./Component/SortProduct";

function Shop(props) {
  const [products, setProducts] = useState([]);

  //state dùng để sắp xếp sản phẩm
  const [sort, setSort] = useState("default");

  //Tổng số trang
  const [totalPage, setTotalPage] = useState();

  // Nhận category từ url
  const category =
    new URLSearchParams(window.location.search).get("category") || "all";

  //Từng trang hiện tại
  const [pagination, setPagination] = useState({
    page: "1",
    count: "8",
    search: "",
    category: category,
  });

  //Hàm này dùng để lấy value từ component SortProduct truyền lên
  const handlerChangeSort = (value) => {
    // console.log("Value: ", value);

    setSort(value);
  };

  //Hàm này dùng để thay đổi state pagination.page
  //Nó sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
  const handlerChangePage = (value) => {
    // console.log("Value: ", value);

    //Sau đó set lại cái pagination để gọi chạy làm useEffect gọi lại API pagination
    setPagination({
      page: value,
      count: pagination.count,
      search: pagination.search,
      category: pagination.category,
    });
  };

  //Hàm này dùng để thay đổi state pagination.search
  //Hàm này sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
  const handlerSearch = (value) => {
    // console.log("Value: ", value);

    setPagination({
      page: pagination.page,
      count: pagination.count,
      search: value,
      category: pagination.category,
    });
  };

  //Hàm này dùng để thay đổi state pagination.category
  const handlerCategory = (value) => {
    // console.log("Value: ", value);

    setPagination({
      page: pagination.page,
      count: pagination.count,
      search: pagination.search,
      category: value,
    });
  };

  //Gọi hàm Pagination
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page: pagination.page,
        count: pagination.count,
        search: pagination.search,
        category: pagination.category,
      };

      const query = queryString.stringify(params);

      const newQuery = "?" + query;

      const response = await ProductAPI.getPagination(newQuery);

      setTotalPage(response.totalPages);
      setProducts(response.products);
    };

    fetchData();
  }, [pagination]);

  return (
    <div className="container">
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Shop</h1>
            </div>
            <div className="col-lg-6 text-lg-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <h5 className="text-uppercase mb-4">Categories</h5>
              <div className="py-2 px-4 bg-dark text-white mb-3">
                <strong className="small text-uppercase font-weight-bold">
                  Apple
                </strong>
              </div>
              <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("all")}
                  >
                    All
                  </a>
                </li>
              </ul>
              <div className="py-2 px-4 bg-light mb-3">
                <strong className="small text-uppercase font-weight-bold">
                  Iphone & Mac
                </strong>
              </div>
              <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("iphone")}
                  >
                    IPhone
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("ipad")}
                  >
                    Ipad
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("macbook")}
                  >
                    Macbook
                  </a>
                </li>
              </ul>
              <div className="py-2 px-4 bg-light mb-3">
                <strong className="small text-uppercase font-weight-bold">
                  Wireless
                </strong>
              </div>
              <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("airpod")}
                  >
                    Airpod
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("watch")}
                  >
                    Watch
                  </a>
                </li>
              </ul>
              <div className="py-2 px-4 bg-light mb-3">
                <strong className="small text-uppercase font-weight-bold">
                  Other
                </strong>
              </div>
              <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("mouse")}
                  >
                    Mouse
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("keyboard")}
                  >
                    Keyboard
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="reset-anchor"
                    href="#"
                    onClick={() => handlerCategory("other")}
                  >
                    Other
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row mb-3 align-items-center">
                {/* ------------------Search----------------- */}
                <Search handlerSearch={handlerSearch} />
                {/* ------------------Search----------------- */}

                <div className="col-lg-8">
                  <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                    <li className="list-inline-item">
                      <SortProduct handlerChangeSort={handlerChangeSort} />
                    </li>
                  </ul>
                </div>
              </div>

              <Products products={products} sort={sort} />

              <Pagination
                pagination={pagination}
                handlerChangePage={handlerChangePage}
                totalPage={totalPage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
