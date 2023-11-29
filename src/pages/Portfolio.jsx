export default function Portfolio() {
  return (
  
    <>
      <section id="work">
            <div className="container d-flex">
                {/* <!-- All left side titles have the same className --> */}
                <div className="title">
                    <h2>Work</h2>
                </div>
                <div className="content">
                    {/* <!-- All cards have the same className and separate ids --> */}
                    <div className="box" id="work1">
                        <div className="backgrounds">
                            <h4>Surf Report</h4> 
                            <p>MERN Stack</p>
                        </div>
                    </div>
                    <div className="box" id="work2">
                        <a href="https://brianahlers.github.io/lyriclookup/">
                            <div className="backgrounds">
                                <h4>Lyric Lookup</h4>
                                <p>HTML/CSS/JavaScript</p>
                            </div>
                        </a>
                    </div>
                    <div className="box" id="work3">
                        <div className="backgrounds">
                            <h4>Calculator</h4>
                            <p>React/JavaScript/CSS</p>
                        </div>
                    </div>
                    <div className="box" id="work4">
                        <a href="https://aads10323-501dfea30cfd.herokuapp.com/">
                            <div className="backgrounds">
                                <h4>Leap-To-Success</h4> 
                                <p>JavaScript
                                    /Sequelize
                                    /Handlebars</p>
                            </div>
                        </a>
                    </div>
                    <div className="box" id="work5">
                        <div className="backgrounds">
                            <h4>Run Buddy</h4> 
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

  );
}
