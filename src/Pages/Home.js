import React, { useEffect , Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const facilities = [
  { icon : 'fas fa-hospital-alt' , title : '24x7 Emergency Available' , des : 'Nullam accumsan, velit et porta consequat, purus leo congue risus' },
  { icon : 'fas fa-bed' , title : '40+ Bed Facilities' , des : 'Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum' },
  { icon : 'fas fa-hospital-user' , title : 'Cardiogram Machine' , des : 'Donec lacinia finibus tortor. Curabitur luctus eleifend odio.' },
  { icon : 'fas fa-dna' , title : 'X-ray and Sonography' , des : 'Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.' },
  { icon : 'fas fa-wheelchair' , title : 'Semi Special, Special and Delux Room Available' , des : 'Etiam in massa eu neque euismod consectetur.' },
  { icon : 'fas fa-notes-medical' , title : 'Medical' , des : 'Morbi vulputate, tortor nec pellentesque molestie' },
]

const Home = () => {
  const [title, settitle] = React.useState("Welcome to City");
  const [list, setlist] = React.useState([])

  useEffect(() => {
    console.info("component++ mounted");
  }, []);

  useEffect(() => {
    console.info("component++ updated , title changed");
  }, [title]);

  const onClickHandler = () => {
    setlist(facilities)
  };

  const data = [
    { count: 23, title: "Doctors", icon: "fas fa-user-md" },
    { count: 18, title: "Departments", icon: "far fa-hospital" },
    { count: 980, title: "Patients", icon: "fas fa-heartbeat" },
    { count: 12, title: "Awards", icon: "fas fa-award" },
  ];

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <Container>
          <h1>
            {title}
            <br />
            Multispeciality Hospital
          </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </Container>
      </section>
      <main id="main">
        <section id="why-us" className="why-us"></section>
        <section id="counts" className="counts">
          <div className="container">
            <Row>
              {data.map((i,index) => {
                return (
                  <Fragment>
                    <span>Test</span>
                  <Col key={index} md={6} lg={3}>
                    <div className="count-box">
                      <i className={i.icon} />
                      <span>{i.count}</span>
                      <p>{i.title}</p>
                    </div>
                  </Col>
                  </Fragment>
                );
              })}
            </Row>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Our Facilities</h2>
              <p>
                Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam
                volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                Phasellus placerat mi et suscipit pulvinar. Donec quis tristique
                lectus.
              </p>
            </div>
              { list.length < 1 && <button className="btn btn-danger " onClick={onClickHandler}>Load Facilities...</button>}
            <div className="row">
              {
                list.map((i) => {
                  return <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <i className={i.icon} />
                    </div>
                    <h4>
                      <a href>{i.title}</a>
                    </h4>
                    <p>
                      {i.des}
                    </p>
                  </div>
                </div>
                })
              }
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Reviews</h2>
            </div>
            <div
              className="testimonials-slider swiper-container"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Jacob Wilsson</h3>
                      <h4>Writer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis posuere, lacus ac tincidunt tempor, sapien justo
                        ultrices ante, vel pharetra turpis ex ac nisi. Aliquam
                        tempor egestas turpis, nec commodo lorem egestas
                        eleifend. Curabitur lacus ipsum, fermentum sit amet leo
                        non, blandit tincidunt turpis.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Ava Smith</h3>
                      <h4>Artist</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Praesent pellentesque leo vestibulum, facilisis ante
                        eget, pharetra mi. Curabitur risus mauris, dignissim
                        ullamcorper vehicula id, aliquet ut turpis. Nunc euismod
                        nec nulla non tincidunt. Vivamus nisi mauris, blandit
                        quis sem sit amet, posuere blandit diam. Cras quis quam
                        suscipit.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Abigail Martin</h3>
                      <h4>Teacher</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fusce ante ipsum, convallis auctor dui sit amet, feugiat
                        blandit ex. Etiam eget tortor sed augue laoreet laoreet
                        vel non libero. Sed in nibh ut sem ornare feugiat at at
                        risus. Morbi gravida enim vitae tortor fringilla
                        tristique. Nulla ac mauris et elit eleifend suscipit et
                        quis lacus. Nam nec ex purus.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Alexander Tremblay</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Nam at est in nibh cursus hendrerit. Nunc commodo diam a
                        erat fermentum aliquet. Integer at interdum nisi.
                        Vivamus risus erat, facilisis a blandit ut, sollicitudin
                        sed est. Vestibulum volutpat luctus quam sed finibus.
                        Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Jayden Brown</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Quisque tristique lectus eget pretium lacinia. Mauris
                        suscipit sapien sit amet enim rhoncus tristique.
                        Phasellus dictum aliquam nisl vel fermentum. Duis
                        viverra luctus justo, vel aliquam ipsum mollis nec.
                        Pellentesque quis suscipit erat. Mauris id lobortis
                        tellus.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-1.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-2.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-3.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-4.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-8.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
