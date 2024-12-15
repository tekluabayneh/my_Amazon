import React from "react";
import "./productFilterSideBarStyle.css";

import Rating from "@mui/material/Rating";

const ProdutFilerSideBar = () => {
  return (
    <div className="productSideBarFilter_Container">
      <div className="RefinementsBar">
        <div className="RefinementsBarSub">
          <span className="a-size-base a-text-bold">Filtered by</span>
        </div>
        <div className="filterSubTitle">
          <span>Computers &amp; Acce...</span>
          <span>Batianda</span>
          <span>AOC</span>
        </div>
      </div>

      <div className="department_Container">
        <span className="department-title">Department</span>
        <ul className="breadcrumb-container">
          <li>
            <span role="button">
              <a href="#" className="breadcrumb-link">
                Any Category
              </a>
            </span>
            <span className="breadcrumb-delimiter">&gt;</span>
          </li>
          <li>
            <span role="button">
              <a href="#" className="breadcrumb-link">
                Electronics
              </a>
            </span>
            <span className="breadcrumb-delimiter">&gt;</span>
          </li>
          <li>
            <span className="breadcrumb-current">
              Computers &amp; Accessories
            </span>
          </li>
        </ul>
        <div className="department-options">
          <span>
            <div className="department-radio">
              <label>
                <input type="radio" name="departments" value="all" />
                <i className="radio-icon"></i>
                <span className="radio-label">All</span>
              </label>
            </div>
          </span>

          <span>
            <div className="department-radio">
              <label>
                <input type="radio" name="departments" />
                <i className="radio-icon"></i>
                <span className="radio-label">Moniters</span>
              </label>
            </div>
          </span>

          <span>
            <div className="department-radio">
              <label>
                <input type="radio" />
                <i className="radio-icon"></i>
                <span className="radio-label">Tablet Accessories</span>
              </label>
            </div>
          </span>
        </div>
      </div>

      {/*  */}
      <div className="brand_container">
        <span className="brands-title">Brands</span>
        <div className="brands-options">
          <span>
            <div className="brand-checkbox">
              <label>
                <input type="checkbox" name="brands" />
                <i className="checkbox-icon"></i>
                <span className="brand-label">AOC</span>
              </label>
            </div>
          </span>
          <span>
            <div className="brand-checkbox">
              <label>
                <input type="checkbox" name="brands" value="Batianda" />
                <i className="checkbox-icon"></i>
                <span className="brand-label">Batianda</span>
              </label>
            </div>
          </span>
          <span>
            <div className="brand-checkbox">
              <label>
                <input type="checkbox" name="brands" value="CISSOOK" />
                <i className="checkbox-icon"></i>
                <span className="brand-label">CISSOOK</span>
              </label>
            </div>
          </span>
          <span>
            <div className="brand-checkbox">
              <label>
                <input type="checkbox" name="brands" value="ELP" />
                <i className="checkbox-icon"></i>
                <span className="brand-label">ELP</span>
              </label>
            </div>
          </span>
        </div>
      </div>
      {/*  */}

      <div className="review-rating-container">
        <span id="reviewRating" className="review-rating-title">
          Customer Reviews
        </span>
        <div className="rating-options">
          <span>
            <div className="rating-option">
              <label>
                <input type="radio" name="reviewRating" value="all" />
                <i className="icon-radio"></i>
                <span className="radio-label">
                  <span className="label-text">All</span>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="rating-option">
              <label>
                <input type="radio" name="reviewRating" value="4" />
                <i className="icon-radio"></i>
                <span className="radio-label">
                  <div className="star-rating">
                    <span className="icon-star star-3">
                      <Rating
                        name="review-rating"
                        value={3}
                        precision={0.1}
                        sx={{ fontSize: "17px" }}
                      />
                    </span>
                    <span aria-hidden="true">&amp; up</span>
                  </div>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="rating-option">
              <label>
                <input type="radio" name="reviewRating" value="3" />
                <i className="icon-radio"></i>
                <span className="radio-label">
                  <div className="star-rating">
                    <span className="icon-star star-3">
                      <Rating
                        name="review-rating"
                        value={3}
                        precision={0.1}
                        sx={{ fontSize: "17px" }}
                      />
                    </span>
                    <span>&amp; up</span>
                  </div>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="rating-option">
              <label>
                <input type="radio" name="reviewRating" value="2" />
                <i className="icon-radio"></i>
                <span className="radio-label">
                  <div
                    className="star-rating"
                    aria-label="Average review star rating of 2 and up"
                  >
                    <span className="icon-star star-5">
                      <Rating
                        name="review-rating"
                        value={5}
                        precision={0.1}
                        sx={{ fontSize: "17px" }}
                      />
                    </span>
                    <span aria-hidden="true">&amp; up</span>
                  </div>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="rating-option">
              <label>
                <input type="radio" name="reviewRating" value="1" />
                <i className="icon-radio"></i>
                <span className="radio-label">
                  <div
                    className="star-rating"
                    aria-label="Average review star rating of 1 and up"
                  >
                    <span className="icon-star star-1">
                      <Rating
                        name="review-rating"
                        value={1}
                        precision={0.1}
                        sx={{ fontSize: "17px" }}
                      />
                    </span>
                    <span aria-hidden="true">&amp; up</span>
                  </div>
                </span>
              </label>
            </div>
          </span>
        </div>
      </div>

      {/*  */}
      <div className="discount_container">
        <span className="discount-title">Discount</span>
        <div className="radio-group">
          <span>
            <div className="radio-option">
              <label>
                <input type="radio" name="percentOff" value="all" />
                <i className="radio-icon"></i>
                <span className="radio-label">
                  <span className="label-text">All</span>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="radio-option">
              <label>
                <input type="radio" name="percentOff" value="1" />
                <i className="radio-icon"></i>
                <span className="radio-label">
                  <span className="label-text">10% off or more</span>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="radio-option">
              <label>
                <input type="radio" name="percentOff" value="2" />
                <i className="radio-icon"></i>
                <span className="radio-label">
                  <span className="label-text">25% off or more</span>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="radio-option">
              <label>
                <input type="radio" name="percentOff" value="3" />
                <i className="radio-icon"></i>
                <span className="radio-label">
                  <span className="label-text">50% off or more</span>
                </span>
              </label>
            </div>
          </span>
          <span>
            <div className="radio-option">
              <label>
                <input type="radio" name="percentOff" value="4" />
                <i className="radio-icon"></i>
                <span className="radio-label">
                  <span className="label-text">70% off or more</span>
                </span>
              </label>
            </div>
          </span>
        </div>
      </div>

      {/*  */}
      <div>
        <span className="prime-programs-title">Prime Programs</span>
        <div className="checkbox-group">
          <span>
            <div className="checkbox-option">
              <label>
                <input type="checkbox" name="accessType" value="1" />
                <i className="checkbox-icon"></i>
                <span className="checkbox-label">
                  <span className="label-text">Prime Exclusive</span>
                </span>
              </label>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProdutFilerSideBar;
