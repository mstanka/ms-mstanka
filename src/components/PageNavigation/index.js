import React from "react"
import { Link } from "gatsby"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"
// Styles
import {
  PageNavigationWrapper,
  ImgWrapper,
  Current,
} from "./PageNavigation.styles"

const PageNavigation = ({ currentPage, numPages }) => (
  <PageNavigationWrapper>
    <ImgWrapper>
      {currentPage > 1 && (
        <Link to={`/blog/${currentPage === 2 ? "" : currentPage - 1}`}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size="2x"
            color="var(--quat-color)"
          />
        </Link>
      )}
    </ImgWrapper>
    <Current>
      <p>
        {currentPage} / {numPages}
      </p>
    </Current>
    <ImgWrapper>
      {currentPage !== numPages && (
        <Link to={`/blog/${currentPage + 1}`}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            size="2x"
            color="var(--quat-color)"
          />
        </Link>
      )}
    </ImgWrapper>
  </PageNavigationWrapper>
)

export default PageNavigation
