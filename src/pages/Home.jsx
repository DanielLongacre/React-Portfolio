export default function Home() {
  return (
    <>
      <section id="about">
            <div className="container d-flex flex-column bd-highlight">
                <div className="title row justify-content-start col-12 mt-5 mb-3">
                    <h1>About Me</h1>
                </div>
                <img src={"../src/assets/blue_shirt.jpg"} alt="Picture of me in a blue shirt" style={{width: "25%", height: "25%", borderRadius: "25%", fontSize: "150%"}}/>
                <div className="content col-12 mt-3">
                    <h4> I'm a computer programmer, passionate about problem 
                        solving and learning new skills. I have 2 years of 
                        experience with several projects.</h4>
                </div>
            </div>
        </section>
    </>

  );
}
