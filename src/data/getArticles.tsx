const getArticles = () => {
    fetch("https://www.mocky.io/v3/eb23bb6d-f34c-459f-94e2-10fc547f90d6", {
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }).then((res)=>{return res}).then((data)=>{return data.json()}) //temp version
}
export default getArticles;