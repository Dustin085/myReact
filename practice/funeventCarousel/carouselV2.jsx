function Carousel() {
    const { useState } = React;
    const [activeSlide, setActiveSlide] = useState(0);
    // Slide元件
    function Slide({ imgUrl, isActive }) {
        let className = "slide";
        if (isActive) {
            className = "slide active";
        }
        return <figure className={className}><img src={imgUrl} alt="" /></figure>
    }
    let slideUrls = ["./images/slide1.jpg",
        "./images/slide2.jpg",
        "./images/slide3.jpg",
        "./images/slide4.jpg",
        "./images/slide5.jpg"]

    // 控制按鈕元件
    function CtrlBtn({ num, isActive }) {
        let className = "ctrl-btn";
        if (isActive) {
            className = "ctrl-btn active";
        }
        return <button type="button" className={className} onClick={() => {
            setActiveSlide(num);
        }}></button>
    }
    let ctrlBtnArr = [1, 2, 3, 4, 5];

    return <>
        <div className="carousel">
            <div className="slide-box">
                {
                    slideUrls.map((slideUrl, index) => {
                        return index == activeSlide ? <Slide key={index} imgUrl={slideUrl} isActive /> : <Slide key={index} imgUrl={slideUrl} />
                    })
                }
            </div>
            <div className="ctrl-box">
                <button type="button" className="arrow arrow--prev" id="caro-prev-btn"></button>
                <div className="ctrl-btn-box">
                    {
                        ctrlBtnArr.map((key, index) => {
                            return index == activeSlide ? <CtrlBtn key={key} num={index} isActive /> : <CtrlBtn key={key} num={index} />
                        })
                    }
                </div>
                <button type="button" className="arrow arrow--next" id="caro-next-btn"></button>
            </div>
        </div>
    </>
}