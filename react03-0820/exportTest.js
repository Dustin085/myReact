export default  function BootstrapCard(props) {
    // console.log(props);

    // 判斷有無年齡資料
    let ageInfo = "";
    // if (!props.age) {
    //     ageInfo = "查無年齡資料";
    // } else {
    //     ageInfo = `年齡：${props.age}歲`;
    // }
    ageInfo = !props.age ? "查無年齡資料" : `年齡：${props.age}歲`;
    // 判斷有無姓名資料
    let nameInfo = "";
    if (!props.name) {
        nameInfo = "查無姓名資料";
    } else {
        nameInfo = props.name;
    }

    let cardWidth = ""
    if (!props.width) {
        cardWidth = "18rem";
    } else {
        cardWidth = props.width;
    }
    return <>
        <div className="card" style={{ width: cardWidth }}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nameInfo}</h5>
                <p className="card-text">{ageInfo}</p>
                <a href="#" className="btn btn-primary">個人網站</a>
            </div>
        </div>
        
    </>
}