const AllReducers = (
  state = {
    getAllRecordCount: 0,
    getAllArticleBatchWise: [],
    getAllArticlesUserWise: [],
    getAllUsers: [],
    hasUserMarked: [],
    getAllAuthors: [],
    getAllAuthorsFailed: [],
    currentSelectedAuthor: "",
    currentSelectedCategory: "",
    currentSearchQuery: "",
    getCurrentPostHtml: "",
    getCurrentPostHtmlFailed: "",
    openPopModal: false,
    totalPages: 1,
    currentPage: 1,
    allAuthors: [],
    currentOpenedLink: "",
    allSavedRecordsUserWise: [],
    allSavedRecordsUserWiseFailed: "",
  },
  action
) => {
  switch (action.type) {
    case "REST_CURRENT_CATEGORY": {
      return {
        ...state,
        currentSelectedCategory: action.payload,
      };
    }
    case "USER_SAVED_RECORDS": {
      return {
        ...state,
        allSavedRecordsUserWise: action.payload,
      };
    }
    case "USER_SAVED_RECORDS_FAILED": {
      return {
        ...state,
        allSavedRecordsUserWiseFailed: action.paylaod,
      };
    }
    case "CURRENT_OPENED_LINK": {
      return {
        ...state,
        currentOpenedLink: action.payload,
      };
    }
    case "RESET_CURRENT_AUTHOR": {
      return {
        ...state,
        currentSelectedAuthor: action.payload,
      };
    }
    case "RESET_CURRENT_SEARCH_QUERY": {
      return {
        ...state,
        currentSearchQuery: action.payload,
      };
    }
    case "GET_TOTAL_PAGES": {
      return {
        ...state,
        totalPages: action.payload,
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case "GET_SELECTED_AUTHOR": {
      return {
        ...state,
        currentSelectedAuthor: action.payload,
      };
    }
    case "SET_SELECTED_AUTHOR": {
      return {
        ...state,
        currentSelectedAuthor: action.payload,
      };
    }
    case "OPEN_POPUP_MODAL": {
      return {
        ...state,
        openPopModal: action.payload,
      };
    }
    case "GET_CURRENT_POST_HTML": {
      return {
        ...state,
        getCurrentPostHtml: action.payload,
      };
    }
    case "GET_CURRENT_POST_HTML_FAILED": {
      return {
        ...state,
        getCurrentPostHtmlFailed: action.payload,
      };
    }
    case "GET_SEARCH_QUERY": {
      return {
        ...state,
        currentSearchQuery: action.payload,
      };
    }
    case "GET_SELECTED_CATEGORY": {
      return {
        ...state,
        currentSelectedCategory: action.payload,
      };
    }
    case "GET_ALL_AUTHORS": {
      return {
        ...state,
        getAllAuthors: action.payload,
      };
    }
    case "GET_ALL_AUTHORS_FAILED": {
      return {
        ...state,
        getAllAuthorsFailed: action.payload,
      };
    }
    case "GET_ALL_RECORDS": {
      return {
        ...state,
        getAllArticleBatchWise: action.payload,
      };
    }
    case "HAS_USER_MARKED": {
      return {
        ...state,
        hasUserMarked: action.payload,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case "GET_ALL_ARTICLES_BY_USER": {
      return {
        ...state,
        getAllArticlesUserWise: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AllReducers;
