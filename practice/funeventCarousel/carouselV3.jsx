function Carousel() {
    const { useState } = React;
    const [activeSlide, setActiveSlide] = useState(0);
    // Slide元件
    function Slide({ imgUrl, className }) {
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
                        return <Slide key={index} imgUrl={slideUrl} className={"slide" + (index === activeSlide ? " active" : "")} />
                    })
                }
                {/*
                <Slide imgUrl={slideUrls[0]} isActive={0 === activeSlide} />
                <Slide imgUrl={slideUrls[1]} isActive={1 === activeSlide} />
                <Slide imgUrl={slideUrls[2]} isActive={2 === activeSlide} />
                <Slide imgUrl={slideUrls[3]} isActive={3 === activeSlide} />
                <Slide imgUrl={slideUrls[4]} isActive={4 === activeSlide} />
                */}
            </div>
            <div className="ctrl-box">
                <button type="button" className="arrow arrow--prev" id="caro-prev-btn"></button>
                <div className="ctrl-btn-box">
                    {
                        ctrlBtnArr.map((key, index) => {
                            return <CtrlBtn key={key} num={index} isActive={index === activeSlide} />
                        })
                    }
                </div>
                <button type="button" className="arrow arrow--next" id="caro-next-btn"></button>
            </div>
        </div>
    </>
}