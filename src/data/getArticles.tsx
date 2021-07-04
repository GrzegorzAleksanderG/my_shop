import { getArticlesAction } from "../actions/getDataActions";

const getArticles = (dispatch: Function) => {
    fetch("https://www.mocky.io/v3/eb23bb6d-f34c-459f-94e2-10fc547f90d6", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then((res) => { return res.json() }).then((data) => { dispatch(getArticlesAction(data.articles)) });
}
export default getArticles;