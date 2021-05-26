import {
  OUTREACH_SUCCESS,
  ERROR,
  SENTIMENT_SUCCESS,
  BUZZ_SUCCESS,
  WORDLCLOUD_SUCCESS,
  MENTIONS_SUCCESS
} from "../../helpers/constants";

const dashboard = (state, { payload, type }) => {
  switch (type) {
    case OUTREACH_SUCCESS:
      console.log("State check!!:", state)
      return {
        ...state,
        outreachData: payload.data
      }
    case SENTIMENT_SUCCESS:
      console.log("State check!!:", state)
      return {
        ...state,
        sentimentData: {
          line: payload.data.line,
          pie: payload.data.pie
        }
      }
    case BUZZ_SUCCESS:
      console.log("State check!!:", state)
      return {
        ...state,
        buzzData: payload.data
      }
    case WORDLCLOUD_SUCCESS:
      console.log("State check!!:", state)
      return {
        ...state,
        wordCloudData: payload.data
      }
    case MENTIONS_SUCCESS:
      console.log("State check!!:", state)
      return {
        ...state,
        mentionsData: payload.data
      }
    case ERROR:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default dashboard;