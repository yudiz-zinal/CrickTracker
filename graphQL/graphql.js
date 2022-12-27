import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query ExampleQuery($getHomePageArticleInput2: getHomePageArticleInput) {
    getHomePageArticle(input: $getHomePageArticleInput2) {
      nTotal
      aResults {
        iCategoryId
        sName
        iSeriesId
        eType
        sSlug
        bScoreCard
        aArticle {
          _id
          sTitle
          sSubtitle
          sSrtTitle
          oImg {
            sText
            sCaption
            sAttribute
            sUrl
          }
          oTImg {
            sText
            sCaption
            sAttribute
            sUrl
          }
          dPublishDate
          dPublishDisplayDate
          nDuration
          sDescription
          sType
        }
      }
    }
  }
`;
export const GET_MENU = gql`
  query ExampleQuery {
    getMenuTree {
      aResults {
        _id
        sUrl
        sTitle
        sSlug
        oChildren {
          _id
          sTitle
          sSlug
          sUrl
          eUrlTarget
          eMenuType
        }
        nSort
        eUrlTarget
        eStatus
        eMenuType
        bIsMulti
      }
    }
  }
`;
