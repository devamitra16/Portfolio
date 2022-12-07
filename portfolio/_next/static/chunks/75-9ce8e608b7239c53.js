"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[75], {
    4275: function(e, s) {
        s.Z = {
            src: "/_next/static/media/cancel.ba9b29b7.svg",
            height: 512,
            width: 512
        }
    },
    6029: function(e, s) {
        s.Z = {
            src: "/_next/static/media/img-mobile.bffeb54a.jpg",
            height: 300,
            width: 300,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAAABgIDAAAAAAAAAAAAAAAAAQIDBEEGEhEhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQJB/9oADAMBAAIRAxEAPwCbOsxixRjWOophyFbqs09cX7QAAMFbH//Z",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    8212: function(e, s, a) {
        var l = a(5893);
        a(7294);
        let i = ()=>(0,
        l.jsxs)(l.Fragment, {
            children: [(0,
            l.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [(0,
                l.jsx)("i", {
                    className: "fa fa-map position-absolute"
                }), (0,
                l.jsx)("span", {
                    className: "d-block",
                    children: "Address Point"
                }), "123 Stree New York City , United States Of America 750065."]
            }), (0,
            l.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [(0,
                l.jsx)("i", {
                    className: "fa fa-envelope-open position-absolute"
                }), (0,
                l.jsx)("span", {
                    className: "d-block",
                    children: "mail me"
                }), " ", (0,
                l.jsx)("a", {
                    href: "mailto:steve@mail.com",
                    children: "steve@mail.com"
                })]
            }), (0,
            l.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [(0,
                l.jsx)("i", {
                    className: "fa fa-phone-square position-absolute"
                }), (0,
                l.jsx)("span", {
                    className: "d-block",
                    children: "call me"
                }), " ", (0,
                l.jsx)("a", {
                    href: "Tel: +216 21 184 010",
                    children: "+216 21 184 010"
                })]
            })]
        });
        s.Z = i
    },
    6047: function(e, s, a) {
        var l = a(5893)
          , i = a(7294)
          , t = a(5247)
          , c = a(5678);
        a(4213);
        let o = ()=>{
            let e = (0,
            i.useRef)()
              , s = s=>{
                s.preventDefault(),
                t.ZP.sendForm("service_n4mkhz9", "template_ugoztxr", e.current, "user_vYmDSd9PwIuRXUQEDjYwN").then(e=>{
                    console.log(e),
                    c.Am.success("Message Sent Successfully!", {
                        position: "top-right",
                        autoClose: 2e3,
                        hideProgressBar: !1,
                        closeOnClick: !0,
                        pauseOnHover: !0,
                        draggable: !0,
                        progress: void 0
                    }),
                    document.getElementById("myForm").reset()
                }
                , e=>{
                    c.Am.error("Ops Message Not Sent!", {
                        position: "top-right",
                        autoClose: 2e3,
                        hideProgressBar: !1,
                        closeOnClick: !0,
                        pauseOnHover: !0,
                        draggable: !0,
                        progress: void 0
                    })
                }
                )
            }
            ;
            return (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsx)("form", {
                    id: "myForm",
                    className: "contactform",
                    ref: e,
                    onSubmit: s,
                    children: (0,
                    l.jsxs)("div", {
                        className: "row",
                        children: [(0,
                        l.jsx)("div", {
                            className: "col-12 col-md-6",
                            children: (0,
                            l.jsx)("div", {
                                className: "form-group",
                                children: (0,
                                l.jsx)("input", {
                                    type: "text",
                                    name: "name",
                                    placeholder: "YOUR NAME",
                                    required: !0
                                })
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "col-12 col-md-6",
                            children: (0,
                            l.jsx)("div", {
                                className: "form-group",
                                children: (0,
                                l.jsx)("input", {
                                    type: "email",
                                    name: "user_email",
                                    placeholder: "YOUR EMAIL",
                                    required: !0
                                })
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "col-12 col-md-12",
                            children: (0,
                            l.jsx)("div", {
                                className: "form-group",
                                children: (0,
                                l.jsx)("input", {
                                    type: "text",
                                    name: "subject",
                                    placeholder: "YOUR SUBJECT",
                                    required: !0
                                })
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "col-12",
                            children: (0,
                            l.jsx)("div", {
                                className: "form-group",
                                children: (0,
                                l.jsx)("textarea", {
                                    name: "message",
                                    placeholder: "YOUR MESSAGE",
                                    required: !0
                                })
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "col-12",
                            children: (0,
                            l.jsxs)("button", {
                                type: "submit",
                                className: "button",
                                children: [(0,
                                l.jsx)("span", {
                                    className: "button-text",
                                    children: "Send Message"
                                }), (0,
                                l.jsx)("span", {
                                    className: "button-icon fa fa-send"
                                })]
                            })
                        })]
                    })
                })
            })
        }
        ;
        s.Z = o
    },
    9830: function(e, s, a) {
        var l = a(5893);
        a(7294);
        let i = [{
            iconName: "fa fa-facebook",
            link: "https://www.facebook.com/"
        }, {
            iconName: "fa fa-twitter",
            link: "https://twitter.com/"
        }, {
            iconName: "fa fa-youtube",
            link: "https://www.youtube.com/"
        }, {
            iconName: "fa fa-dribbble",
            link: "https://dribbble.com/"
        }]
          , t = ()=>(0,
        l.jsx)("ul", {
            className: "social list-unstyled pt-1 mb-5",
            children: i.map((e,s)=>(0,
            l.jsx)("li", {
                children: (0,
                l.jsx)("a", {
                    href: e.link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    l.jsx)("i", {
                        className: e.iconName
                    })
                })
            }, s))
        });
        s.Z = t
    },
    201: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return g
            }
        });
        var l = a(5893);
        a(7294);
        let i = [{
            title: "12",
            subTitle1: "years of",
            subTitle2: "experience"
        }, {
            title: "97",
            subTitle1: "completed",
            subTitle2: "projects"
        }, {
            title: "81",
            subTitle1: "Happy",
            subTitle2: "customers"
        }, {
            title: "53",
            subTitle1: "awards",
            subTitle2: "won"
        }]
          , t = ()=>(0,
        l.jsx)("div", {
            className: "row",
            children: i.map((e,s)=>(0,
            l.jsx)("div", {
                className: "col-6",
                children: (0,
                l.jsxs)("div", {
                    className: "box-stats with-margin",
                    children: [(0,
                    l.jsx)("h3", {
                        className: "poppins-font position-relative",
                        children: e.title
                    }), (0,
                    l.jsxs)("p", {
                        className: "open-sans-font m-0 position-relative text-uppercase",
                        children: [e.subTitle1, " ", (0,
                        l.jsx)("span", {
                            className: "d-block",
                            children: e.subTitle2
                        })]
                    })]
                })
            }, s))
        })
          , c = [{
            year: "2015",
            degree: "ENGINEERING DEGREE",
            institute: "OXFORD UNIVERSITY",
            details: "  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore\n        adipisicing elit"
        }, {
            year: "2012",
            degree: "MASTER DEGREE",
            institute: "KIEV UNIVERSITY",
            details: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol\n        elit, tempor incididunt"
        }, {
            year: "2009",
            degree: "BACHELOR DEGREE ",
            institute: "TUNIS HIGH SCHOOL",
            details: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur\n        elit, sed do eiusmod tempor duntt"
        }]
          , o = ()=>(0,
        l.jsx)("ul", {
            children: c.map((e,s)=>(0,
            l.jsxs)("li", {
                children: [(0,
                l.jsx)("div", {
                    className: "icon",
                    children: (0,
                    l.jsx)("i", {
                        className: "fa fa-briefcase"
                    })
                }), (0,
                l.jsx)("span", {
                    className: "time open-sans-font text-uppercase",
                    children: e.year
                }), (0,
                l.jsxs)("h5", {
                    className: "poppins-font text-uppercase",
                    children: [e.degree, (0,
                    l.jsx)("span", {
                        className: "place open-sans-font",
                        children: e.institute
                    })]
                }), (0,
                l.jsx)("p", {
                    className: "open-sans-font",
                    children: e.details
                })]
            }, s))
        })
          , A = [{
            year: "   2018 - Present",
            position: " Web Developer",
            compnayName: "Envato",
            details: "  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore\n        adipisicing elit"
        }, {
            year: "2013 - 2018",
            position: " UI/UX Designer",
            compnayName: "Themeforest",
            details: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol\n        elit, tempor incididunt"
        }, {
            year: "2005 - 2013",
            position: "Consultant",
            compnayName: "Videohive",
            details: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur\n        elit, sed do eiusmod tempor duntt"
        }]
          , n = ()=>(0,
        l.jsx)("ul", {
            children: A.map((e,s)=>(0,
            l.jsxs)("li", {
                children: [(0,
                l.jsx)("div", {
                    className: "icon",
                    children: (0,
                    l.jsx)("i", {
                        className: "fa fa-briefcase"
                    })
                }), (0,
                l.jsx)("span", {
                    className: "time open-sans-font text-uppercase",
                    children: e.year
                }), (0,
                l.jsxs)("h5", {
                    className: "poppins-font text-uppercase",
                    children: [e.position, (0,
                    l.jsx)("span", {
                        className: "place open-sans-font",
                        children: e.compnayName
                    })]
                }), (0,
                l.jsx)("p", {
                    className: "open-sans-font",
                    children: e.details
                })]
            }, s))
        })
          , r = [{
            meta: "first name",
            metaInfo: "Steve",
            hasColor: ""
        }, {
            meta: "last name",
            metaInfo: "Milner",
            hasColor: ""
        }, {
            meta: "Age",
            metaInfo: "27 Years",
            hasColor: ""
        }, {
            meta: "Nationality",
            metaInfo: "Tunisian",
            hasColor: ""
        }, {
            meta: "Freelance",
            metaInfo: "Available",
            hasColor: "green"
        }, {
            meta: "Address",
            metaInfo: "Tunis",
            hasColor: ""
        }, {
            meta: "phone",
            metaInfo: "+21621184010",
            hasColor: ""
        }, {
            meta: "Email",
            metaInfo: "you@mail.com",
            hasColor: ""
        }, {
            meta: "Skype",
            metaInfo: " steve.milner",
            hasColor: ""
        }, {
            meta: "langages",
            metaInfo: "French, English",
            hasColor: ""
        }]
          , d = ()=>(0,
        l.jsx)("ul", {
            className: "about-list list-unstyled open-sans-font",
            children: r.map((e,s)=>(0,
            l.jsxs)("li", {
                children: [(0,
                l.jsxs)("span", {
                    className: "title",
                    children: [e.meta, ": "]
                }), (0,
                l.jsx)("span", {
                    className: "value d-block d-sm-inline-block d-lg-block d-xl-inline-block ".concat(e.hasColor),
                    children: e.metaInfo
                })]
            }, s))
        })
          , m = [{
            skillClass: "p25",
            skillPercent: "25",
            skillName: "HTML"
        }, {
            skillClass: "p89",
            skillPercent: "89",
            skillName: "JAVASCRIPT"
        }, {
            skillClass: "p70",
            skillPercent: "70",
            skillName: "CSS"
        }, {
            skillClass: "p66",
            skillPercent: "66",
            skillName: "PHP"
        }, {
            skillClass: "p95",
            skillPercent: "95",
            skillName: "WORDPRESS"
        }, {
            skillClass: "p50",
            skillPercent: "50",
            skillName: "JQUERY"
        }, {
            skillClass: "p65",
            skillPercent: "65",
            skillName: "ANGULAR"
        }, {
            skillClass: "p45",
            skillPercent: "45",
            skillName: "REACT"
        }]
          , h = ()=>(0,
        l.jsx)(l.Fragment, {
            children: m.map((e,s)=>(0,
            l.jsxs)("div", {
                className: "col-6 col-md-3 mb-3 mb-sm-5",
                children: [(0,
                l.jsxs)("div", {
                    className: "c100 ".concat(e.skillClass),
                    children: [(0,
                    l.jsxs)("span", {
                        children: [e.skillPercent, "%"]
                    }), (0,
                    l.jsxs)("div", {
                        className: "slice",
                        children: [(0,
                        l.jsx)("div", {
                            className: "bar"
                        }), (0,
                        l.jsx)("div", {
                            className: "fill"
                        })]
                    })]
                }), (0,
                l.jsx)("h6", {
                    className: "text-uppercase open-sans-font text-center mt-2 mt-sm-4",
                    children: e.skillName
                })]
            }, s))
        });
        var x = {
            src: "/_next/static/media/cv.8d18d6ce.webp",
            height: 570,
            width: 440,
            blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoGAAgAAkA4JaQAAudLRbbAAP6yP/3lL3/6yxdIx1gsV+QfmVvNAAAA",
            blurWidth: 6,
            blurHeight: 8
        }
          , p = a(6029)
          , j = a(5675)
          , f = a.n(j);
        let u = ()=>(0,
        l.jsx)("section", {
            className: "main-content ",
            children: (0,
            l.jsxs)("div", {
                className: "container",
                children: [(0,
                l.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    l.jsx)("div", {
                        className: "col-xl-6 col-lg-5 col-12",
                        children: (0,
                        l.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            l.jsx)("div", {
                                className: "col-12",
                                children: (0,
                                l.jsx)("h3", {
                                    className: "text-uppercase custom-title mb-0 ft-wt-600",
                                    children: "personal infos"
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: "col-12 d-block d-sm-none",
                                children: (0,
                                l.jsx)(f(), {
                                    src: p.Z,
                                    className: "img-fluid main-img-mobile",
                                    alt: "about avatar"
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: "col-12",
                                children: (0,
                                l.jsx)(d, {})
                            }), (0,
                            l.jsx)("div", {
                                className: "col-12 mt-1",
                                children: (0,
                                l.jsxs)("a", {
                                    className: "button",
                                    href: x,
                                    download: !0,
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "button-text",
                                        children: "Download CV"
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "button-icon fa fa-download"
                                    })]
                                })
                            })]
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0",
                        children: (0,
                        l.jsx)(t, {})
                    })]
                }), (0,
                l.jsx)("hr", {
                    className: "separator"
                }), (0,
                l.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    l.jsx)("div", {
                        className: "col-12",
                        children: (0,
                        l.jsx)("h3", {
                            className: "text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600",
                            children: "My Skills"
                        })
                    }), (0,
                    l.jsx)(h, {})]
                }), (0,
                l.jsx)("hr", {
                    className: "separator mt-1"
                }), (0,
                l.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    l.jsx)("div", {
                        className: "col-12",
                        children: (0,
                        l.jsxs)("h3", {
                            className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600",
                            children: ["Experience ", (0,
                            l.jsx)("span", {
                                children: "&"
                            }), " Education"]
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "col-lg-6 m-15px-tb",
                        children: (0,
                        l.jsx)("div", {
                            className: "resume-box",
                            children: (0,
                            l.jsx)(n, {})
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "col-lg-6 m-15px-tb",
                        children: (0,
                        l.jsx)("div", {
                            className: "resume-box",
                            children: (0,
                            l.jsx)(o, {})
                        })
                    })]
                })]
            })
        });
        var g = u
    },
    4318: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return x
            }
        });
        var l = a(5893)
          , i = a(7294)
          , t = a(3253)
          , c = a.n(t)
          , o = a(4275)
          , A = {
            src: "/_next/static/media/quote.085e087d.svg",
            height: 349,
            width: 349
        }
          , n = a(8443);
        let r = ()=>(0,
        i.useContext)(n.I);
        var d = a(5675)
          , m = a.n(d);
        let h = ()=>{
            let {singleData: e, isOpen: s, setIsOpen: a, blogsData: t, handleBlogsData: n} = r()
              , d = e=>{
                n(e)
            }
            ;
            return (0,
            i.useEffect)(()=>{
                c().setAppElement("#modal")
            }
            , []),
            (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsx)("div", {
                    className: "row",
                    id: "modal",
                    children: t.map(i=>(0,
                    l.jsxs)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                        children: [(0,
                        l.jsxs)("article", {
                            className: "post-container",
                            onClick: ()=>d(null == i ? void 0 : i.id),
                            children: [(0,
                            l.jsx)("div", {
                                className: "post-thumb",
                                children: (0,
                                l.jsx)("div", {
                                    className: "d-block position-relative overflow-hidden",
                                    children: (0,
                                    l.jsx)(m(), {
                                        src: null == i ? void 0 : i.img,
                                        className: "img-fluid",
                                        alt: "item.title"
                                    })
                                })
                            }), (0,
                            l.jsxs)("div", {
                                className: "post-content",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "entry-header",
                                    children: (0,
                                    l.jsx)("h3", {
                                        children: null == i ? void 0 : i.title
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "entry-content open-sans-font",
                                    children: (0,
                                    l.jsx)("p", {
                                        children: null == i ? void 0 : i.description1.slice(0, 100)
                                    })
                                })]
                            })]
                        }), (0,
                        l.jsx)(c(), {
                            isOpen: s,
                            onRequestClose: ()=>a(!1),
                            contentLabel: "My dialog",
                            className: "custom-modal dark",
                            overlayClassName: "custom-overlay dark",
                            closeTimeoutMS: 500,
                            children: (0,
                            l.jsxs)("div", {
                                children: [(0,
                                l.jsx)("button", {
                                    className: "close-modal",
                                    onClick: ()=>a(!1),
                                    children: (0,
                                    l.jsx)(m(), {
                                        src: o.Z,
                                        alt: "close icon"
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "box_inner blog-post",
                                    children: (0,
                                    l.jsxs)("article", {
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "title-section text-start text-sm-center",
                                            children: [(0,
                                            l.jsxs)("h1", {
                                                children: ["Post ", (0,
                                                l.jsx)("span", {
                                                    children: "Details"
                                                })]
                                            }), (0,
                                            l.jsx)("span", {
                                                className: "title-bg",
                                                children: "posts"
                                            })]
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "meta open-sans-font",
                                            children: [(0,
                                            l.jsxs)("span", {
                                                children: [(0,
                                                l.jsx)("i", {
                                                    className: "fa fa-user"
                                                }), " ", e.commentor]
                                            }), (0,
                                            l.jsxs)("span", {
                                                className: "date",
                                                children: [(0,
                                                l.jsx)("i", {
                                                    className: "fa fa-calendar"
                                                }), " ", e.date]
                                            }), (0,
                                            l.jsxs)("span", {
                                                children: [(0,
                                                l.jsx)("i", {
                                                    className: "fa fa-tags"
                                                }), " ", e.tag]
                                            })]
                                        }), (0,
                                        l.jsx)("h1", {
                                            children: null == e ? void 0 : e.title
                                        }), (0,
                                        l.jsx)(m(), {
                                            src: null == e ? void 0 : e.img,
                                            className: "img-fluid",
                                            alt: "Blog"
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "blog-excerpt open-sans-font pb-5",
                                            children: [(0,
                                            l.jsx)("p", {
                                                children: null == e ? void 0 : e.description1
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "quotebox",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    className: "icon",
                                                    children: (0,
                                                    l.jsx)(m(), {
                                                        src: A,
                                                        alt: "blog quote"
                                                    })
                                                }), (0,
                                                l.jsx)("p", {
                                                    children: null == e ? void 0 : e.description2
                                                })]
                                            }), (0,
                                            l.jsx)("p", {
                                                children: null == e ? void 0 : e.description3
                                            }), (0,
                                            l.jsx)("p", {
                                                children: null == e ? void 0 : e.description4
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    }, i.id))
                })
            })
        }
        ;
        var x = h
    },
    942: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return x
            }
        });
        var l = a(5893)
          , i = a(7294)
          , t = a(3253)
          , c = a.n(t)
          , o = a(6029)
          , A = a(4275)
          , n = a(201)
          , r = a(5675)
          , d = a.n(r);
        let m = {
            heroImage: "assets/Myphoto.jpg",
            heroMobileImage: o.Z,
            heroTitleName: "steve milner",
            heroDesignation: "web designer",
            heroDescriptions: "I'm a Tunisian based web designer & front‑end developer focused on\n  crafting clean & user‑friendly experiences, I am passionate about\n  building excellent software that improves the lives of those\n  around me.",
            heroBtn: "more about me"
        }
          , h = ()=>{
            let[e,s] = (0,
            i.useState)(!1);
            function a() {
                s(!e)
            }
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)("div", {
                    className: "row home-details-container align-items-center",
                    children: [(0,
                    l.jsx)("div", {
                        className: "col-lg-4 bg position-fixed d-none d-lg-block",
                        style: {
                            backgroundImage: "url(".concat(m.heroImage, ")")
                        }
                    }), (0,
                    l.jsx)("div", {
                        className: "col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start",
                        children: (0,
                        l.jsxs)("div", {
                            children: [(0,
                            l.jsx)(d(), {
                                src: m.heroMobileImage,
                                className: "img-fluid main-img-mobile d-sm-block d-lg-none",
                                alt: "hero man"
                            }), (0,
                            l.jsxs)("h1", {
                                className: "text-uppercase poppins-font",
                                children: ["I'm", " ", m.heroTitleName, ".", (0,
                                l.jsx)("span", {
                                    children: m.heroDesignation
                                })]
                            }), (0,
                            l.jsx)("p", {
                                className: "open-sans-font",
                                children: m.heroDescriptions
                            }), (0,
                            l.jsxs)("button", {
                                className: "button",
                                onClick: a,
                                children: [(0,
                                l.jsx)("span", {
                                    className: "button-text",
                                    children: m.heroBtn
                                }), (0,
                                l.jsx)("span", {
                                    className: "button-icon fa fa-arrow-right"
                                })]
                            })]
                        })
                    })]
                }), (0,
                l.jsx)(c(), {
                    isOpen: e,
                    onRequestClose: a,
                    contentLabel: "My dialog",
                    className: "custom-modal dark hero",
                    overlayClassName: "custom-overlay dark",
                    closeTimeoutMS: 500,
                    children: (0,
                    l.jsxs)("div", {
                        children: [(0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: a,
                            children: (0,
                            l.jsx)(d(), {
                                src: A.Z,
                                alt: "close icon"
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "box_inner about",
                            children: (0,
                            l.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "title-section text-start text-sm-center",
                                    children: [(0,
                                    l.jsxs)("h1", {
                                        children: ["ABOUT ", (0,
                                        l.jsx)("span", {
                                            children: "ME"
                                        })]
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "title-bg",
                                        children: "Resume"
                                    })]
                                }), (0,
                                l.jsx)(n.Z, {})]
                            })
                        })]
                    })
                })]
            })
        }
        ;
        var x = h
    },
    1349: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return E
            }
        });
        var l = a(5893)
          , i = a(7294)
          , t = a(776)
          , c = {
            src: "/_next/static/media/project-1.3cb250b1.jpg",
            height: 552,
            width: 895,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIRAwUiUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKHaKSjjeNxj31au14AC0j//2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
          , o = {
            src: "/_next/static/media/project-2.f5a228df.jpg",
            height: 552,
            width: 895,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAgEAABAwIHAAAAAAAAAAAAAAABAAIDBhEEBRITITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMR/9oADAMBAAIRAxEAPwC7S9Qz55gZnyxNi2iANJuXdi5Pp4RESxVoLDqcuz//2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
          , A = [{
            id: 1,
            type: "mockup project",
            image: c,
            tag: ["mockup"],
            delayAnimation: "0",
            modalDetails: [{
                project: "Website",
                client: "Envato",
                language: "HTML, CSS, Javascript",
                preview: "www.envato.com",
                link: "https://www.envato.com/"
            }]
        }, {
            id: 2,
            type: "youtube project",
            image: o,
            tag: ["video"],
            delayAnimation: "100",
            modalDetails: [{
                project: "video",
                client: "Videohive",
                language: " Adobe After Effects",
                preview: "www.videohive.net",
                link: "https://www.videohive.net"
            }]
        }, {
            id: 3,
            type: "slider project",
            image: {
                src: "/_next/static/media/project-3.c1ae3f32.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAgEDBBESIUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuMatkst5Ws8T3qfAAAf/2Q==",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: [],
            delayAnimation: "200",
            modalDetails: [{
                project: "Website",
                client: "Themeforest",
                language: " HTML, CSS, Javascript",
                preview: "www.envato.com",
                link: "https://www.envato.com"
            }]
        }, {
            id: 4,
            type: "local project",
            image: {
                src: "/_next/static/media/project-4.bfd1cb7c.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADEQQT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCz5amsuustck+rAKuhcwZo0xESMnCVv//Z",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["logo", "video"],
            delayAnimation: "0",
            modalDetails: [{
                project: "video",
                client: "Videohive",
                language: " Adobe After Effects",
                preview: "www.videohive.net",
                link: "https://www.videohive.net"
            }]
        }, {
            id: 5,
            type: "saas project",
            image: {
                src: "/_next/static/media/project-5.9d9c9e19.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAEBAAEFAAAAAAAAAAAAAAABAAIFERNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKjWck5FV396klag/9k=",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["logo"],
            delayAnimation: "100",
            modalDetails: [{
                project: "Web Application",
                client: "Themeforest",
                language: "HTML, CSS, ReactJS",
                preview: "www.envato.com",
                link: "https://themeforest.net/item/deski-saas-software-react-template/33799794"
            }]
        }, {
            id: 6,
            type: "mockup project",
            image: {
                src: "/_next/static/media/project-6.97d38976.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAAMAAAAAAAAAAAAAAAAAARECA6H/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAiH/2gAMAwEAAhEDEQA/ALvVVg3beAAQcpHTf//Z",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["logo", "mockup"],
            delayAnimation: "200",
            modalDetails: [{
                project: "Website",
                client: "Themeforest",
                language: "HTML, CSS, Javascript",
                preview: "www.pexels.com",
                link: "https://www.pexels.com"
            }]
        }, {
            id: 7,
            type: "facebook project",
            image: {
                src: "/_next/static/media/project-7.86186e33.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADBBGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQISMXH/2gAMAwEAAhEDEQA/AKPqa0bqa1ZBW4JYFOnw9iIhO2XaWM8P/9k=",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["logo"],
            delayAnimation: "0",
            modalDetails: [{
                project: "Website",
                client: "Facebook",
                language: "HTML, CSS, Javascript",
                preview: "www.facebook.com",
                link: "https://www.facebook.com/ibthemes"
            }]
        }, {
            id: 8,
            type: "dribble project",
            image: {
                src: "/_next/static/media/project-8.5013e616.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAgEDBBMSQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8ArDUs2ZVbtbiqzGvqZ9AAtIA3L//Z",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["graphic design"],
            delayAnimation: "100",
            modalDetails: [{
                project: "Website",
                client: "Dribbble",
                language: "HTML, CSS, Javascript",
                preview: "www.dribbble.com",
                link: "https://dribbble.com/ib-themes"
            }]
        }, {
            id: 9,
            type: "behence project",
            image: {
                src: "/_next/static/media/project-9.67d36946.jpg",
                height: 552,
                width: 895,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABAwUBAAAAAAAAAAAAAAAAAhITAQMEEVKR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALJGIh8sl7fMlW+AAQv/2Q==",
                blurWidth: 8,
                blurHeight: 5
            },
            tag: ["graphic design", "mockup"],
            delayAnimation: "200",
            modalDetails: [{
                project: "Website",
                client: "Behance",
                language: "HTML, CSS, Javascript",
                preview: "www.behance.com",
                link: "https://www.behance.net/ib-themes"
            }]
        }]
          , n = a(5675)
          , r = a.n(n)
          , d = a(4275);
        let m = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio ",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {}), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , h = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img videocontainer",
                            children: (0,
                            l.jsx)("iframe", {
                                src: "https://www.youtube.com/embed/7e90gBu4pas",
                                title: "YouTube video player",
                                className: "youtube-video",
                                allowFullScreen: !0
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
        ;
        var x = a(6066);
        a(1548),
        a(3873);
        let p = e=>{
            let {modalId: s, setGetModal: a} = e
              , i = {
                dots: !0,
                infinite: !0,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: !0
            };
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsxs)(x.Z, {
                                ...i,
                                children: [(0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsx)(r(), {
                                        src: e.image,
                                        alt: "portfolio project demo"
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsx)(r(), {
                                        src: c,
                                        alt: "portfolio project demo"
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsx)(r(), {
                                        src: o,
                                        alt: "portfolio project demo"
                                    })
                                })]
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , j = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)("video", {
                                id: "video",
                                className: "responsive-video",
                                controls: !0,
                                poster: e.image,
                                children: (0,
                                l.jsx)("source", {
                                    src: "/assets/img/portfolio/video.mp4",
                                    type: "video/mp4"
                                })
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , f = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , u = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , g = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , N = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , v = e=>{
            let {modalId: s, setGetModal: a} = e;
            return (0,
            l.jsxs)("div", {
                className: "modal_portfolio",
                children: [(0,
                l.jsx)("div", {
                    className: "modal__outside",
                    onClick: ()=>a(!1)
                }), (0,
                l.jsx)("div", {
                    className: "modal__content",
                    children: A.filter(e=>e.id === s).map(e=>(0,
                    l.jsxs)("div", {
                        "data-aos": "fade",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "heading mb-2",
                            children: e.type
                        }), (0,
                        l.jsx)("div", {
                            className: "modal__details",
                            children: e.modalDetails.map((e,s)=>(0,
                            l.jsxs)("div", {
                                className: "row open-sans-font",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-file-text-o pr-2"
                                    }), "Project:", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.project
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-user-o pr-2"
                                    }), "Client :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.client
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-code pr-2"
                                    }), "Language :", " ", (0,
                                    l.jsx)("span", {
                                        className: "ft-wt-600 uppercase",
                                        children: e.language
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "col-12 col-sm-6 mb-2",
                                    children: [(0,
                                    l.jsx)("i", {
                                        className: "fa fa-external-link pr-2"
                                    }), "Preview :", " ", (0,
                                    l.jsx)("a", {
                                        className: "preview-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        href: e.link,
                                        children: e.preview
                                    })]
                                })]
                            }, s))
                        }), (0,
                        l.jsx)("figure", {
                            className: "modal__img",
                            children: (0,
                            l.jsx)(r(), {
                                src: e.image,
                                alt: "portfolio project demo"
                            })
                        }), (0,
                        l.jsx)("button", {
                            className: "close-modal",
                            onClick: ()=>a(!1),
                            children: (0,
                            l.jsx)(r(), {
                                src: d.Z,
                                alt: "portfolio project demo"
                            })
                        })]
                    }, e.id))
                })]
            })
        }
          , b = e=>{
            let {modalId: s, setGetModal: a} = e;
            if (1 === s)
                return (0,
                l.jsx)(m, {
                    modalId: s,
                    setGetModal: a
                });
            if (2 === s)
                return (0,
                l.jsx)(h, {
                    modalId: s,
                    setGetModal: a
                });
            if (3 === s)
                return (0,
                l.jsx)(p, {
                    modalId: s,
                    setGetModal: a
                });
            if (4 === s)
                return (0,
                l.jsx)(j, {
                    modalId: s,
                    setGetModal: a
                });
            if (5 === s)
                return (0,
                l.jsx)(f, {
                    modalId: s,
                    setGetModal: a
                });
            if (6 === s)
                return (0,
                l.jsx)(u, {
                    modalId: s,
                    setGetModal: a
                });
            if (7 === s)
                return (0,
                l.jsx)(g, {
                    modalId: s,
                    setGetModal: a
                });
            else if (8 === s)
                return (0,
                l.jsx)(N, {
                    modalId: s,
                    setGetModal: a
                });
            else if (9 === s)
                return (0,
                l.jsx)(v, {
                    modalId: s,
                    setGetModal: a
                })
        }
          , w = ()=>{
            let[e,s] = (0,
            i.useState)(!1)
              , [a,c] = (0,
            i.useState)(1)
              , o = e=>{
                s(!0),
                c(e)
            }
            ;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)("div", {
                    className: "portfolio-main",
                    children: (0,
                    l.jsxs)(t.mQ, {
                        children: [(0,
                        l.jsxs)(t.td, {
                            className: "portfolio-tab-list",
                            "data-aos": "fade-up",
                            children: [(0,
                            l.jsx)(t.OK, {
                                children: "ALL"
                            }), (0,
                            l.jsx)(t.OK, {
                                children: "LOGO"
                            }), (0,
                            l.jsx)(t.OK, {
                                children: "VIDEO"
                            }), (0,
                            l.jsx)(t.OK, {
                                children: "GRAPHIC DESIGN"
                            }), (0,
                            l.jsx)(t.OK, {
                                children: "MOCKUP"
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "container",
                            children: [(0,
                            l.jsx)(t.x4, {
                                children: (0,
                                l.jsx)("div", {
                                    className: "tab-container",
                                    children: A.map(e=>{
                                        let {id: s, type: a, image: i, delayAnimation: t} = e;
                                        return (0,
                                        l.jsx)("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": t,
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "tab-content",
                                                onClick: ()=>o(s),
                                                children: [(0,
                                                l.jsx)(r(), {
                                                    src: i,
                                                    alt: "portfolio project demo"
                                                }), (0,
                                                l.jsx)("h3", {
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "conent-title",
                                                        children: a
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }
                                    )
                                })
                            }), (0,
                            l.jsx)(t.x4, {
                                children: (0,
                                l.jsx)("div", {
                                    className: "tab-container",
                                    children: A.filter(e=>e.tag.includes("logo")).map(e=>{
                                        let {id: s, type: a, image: i, delayAnimation: t} = e;
                                        return (0,
                                        l.jsx)("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": t,
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "tab-content",
                                                onClick: ()=>o(s),
                                                children: [(0,
                                                l.jsx)(r(), {
                                                    src: i,
                                                    alt: "portfolio project demo"
                                                }), (0,
                                                l.jsx)("h3", {
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "conent-title",
                                                        children: a
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }
                                    )
                                })
                            }), (0,
                            l.jsx)(t.x4, {
                                children: (0,
                                l.jsx)("div", {
                                    className: "tab-container",
                                    children: A.filter(e=>e.tag.includes("video")).map(e=>{
                                        let {id: s, type: a, image: i, delayAnimation: t} = e;
                                        return (0,
                                        l.jsx)("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": t,
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "tab-content",
                                                onClick: ()=>o(s),
                                                children: [(0,
                                                l.jsx)(r(), {
                                                    src: i,
                                                    alt: "portfolio project demo"
                                                }), (0,
                                                l.jsx)("h3", {
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "conent-title",
                                                        children: a
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }
                                    )
                                })
                            }), (0,
                            l.jsx)(t.x4, {
                                children: (0,
                                l.jsx)("div", {
                                    className: "tab-container",
                                    children: A.filter(e=>e.tag.includes("graphic design")).map(e=>{
                                        let {id: s, type: a, image: i, delayAnimation: t} = e;
                                        return (0,
                                        l.jsx)("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": t,
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "tab-content",
                                                onClick: ()=>o(s),
                                                children: [(0,
                                                l.jsx)(r(), {
                                                    src: i,
                                                    alt: "portfolio project demo"
                                                }), (0,
                                                l.jsx)("h3", {
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "conent-title",
                                                        children: a
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }
                                    )
                                })
                            }), (0,
                            l.jsx)(t.x4, {
                                children: (0,
                                l.jsx)("div", {
                                    className: "tab-container",
                                    children: A.filter(e=>e.tag.includes("mockup")).map(e=>{
                                        let {id: s, type: a, image: i, delayAnimation: t} = e;
                                        return (0,
                                        l.jsx)("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": t,
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "tab-content",
                                                onClick: ()=>o(s),
                                                children: [(0,
                                                l.jsx)(r(), {
                                                    src: i,
                                                    alt: "portfolio project demo"
                                                }), (0,
                                                l.jsx)("h3", {
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "conent-title",
                                                        children: a
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }
                                    )
                                })
                            })]
                        })]
                    })
                }), e && (0,
                l.jsx)(b, {
                    modalId: a,
                    setGetModal: s
                }), " "]
            })
        }
        ;
        var E = w
    },
    3191: function(e, s, a) {
        var l = a(5893)
          , i = a(9008)
          , t = a.n(i);
        let c = e=>{
            let {pageTitle: s} = e;
            return (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsxs)(t(), {
                    children: [(0,
                    l.jsx)("title", {
                        children: s && "".concat(s, " - Tunis Personal Portfolio React Next js Template}")
                    }), (0,
                    l.jsx)("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }), (0,
                    l.jsx)("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }), (0,
                    l.jsx)("meta", {
                        name: "robots",
                        content: "noindex, follow"
                    }), (0,
                    l.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }), (0,
                    l.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })]
                })
            })
        }
        ;
        s.Z = c
    },
    1281: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return r
            }
        });
        var l = a(5893)
          , i = a(5675)
          , t = a.n(i)
          , c = a(7294)
          , o = {
            src: "/_next/static/media/sun.e8a19ea6.png",
            height: 24,
            width: 24,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMCYxfaSIuBXP4AAAAJcEhZcwAAARkAAAEZAfIJjWwAAAArSURBVAiZY2BgYGBhYQABRgYmJgZGMIuZGUSzMDGzsjIzsSAYcCkkxRDtAA5YAGXUoksFAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , A = function(e) {
            e ? (localStorage.setItem("theme-color", "dark"),
            document.querySelector("body").classList.add("dark"),
            document.querySelector("body").classList.remove("light")) : (localStorage.setItem("theme-color", "light"),
            document.querySelector("body").classList.add("light"),
            document.querySelector("body").classList.remove("dark"))
        };
        let n = ()=>{
            let[e,s] = (0,
            c.useState)(!1)
              , a = ()=>{
                e ? (A(!0),
                s(!1)) : (A(!1),
                s(!0))
            }
            ;
            return (0,
            l.jsxs)("label", {
                className: "theme-switcher-label d-flex  ".concat(e ? "active" : ""),
                children: [(0,
                l.jsx)("input", {
                    type: "checkbox",
                    onClick: a,
                    className: "theme-switcher"
                }), (0,
                l.jsxs)("div", {
                    className: "switch-handle",
                    children: [(0,
                    l.jsx)("span", {
                        className: "light-text",
                        children: (0,
                        l.jsx)(t(), {
                            src: o,
                            alt: "swicher",
                            className: "filter_1",
                            priority: !0
                        })
                    }), (0,
                    l.jsx)("span", {
                        className: "dark-text",
                        children: (0,
                        l.jsx)("i", {
                            className: "fa fa-moon-o",
                            "aria-hidden": "true"
                        })
                    })]
                })]
            })
        }
        ;
        var r = n
    },
    5532: function(e, s, a) {
        var l = a(5893);
        a(7294);
        var i = a(5678);
        let t = e=>{
            let {children: s} = e;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [s, (0,
                l.jsx)(i.Ix, {})]
            })
        }
        ;
        s.Z = t
    }
}]);
