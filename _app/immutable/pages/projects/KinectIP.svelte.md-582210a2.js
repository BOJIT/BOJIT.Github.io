import{S as Qt,i as zt,s as Yt,e as s,t as r,k as p,c as l,a as h,h as n,d as t,m as c,b as d,U as _,g as i,K as a,E as ut}from"../../chunks/index-cabb4aca.js";function Zt(Xt){let m,Y,Me,ae,ie,se,u,Ae,Z,xe,Ce,K,De,Ne,$,Ue,qe,le,E,T,ft,re,w,Re,k,Oe,Fe,ne,y,Ve,ee,Le,Je,he,j,B,mt,pe,b,We,P,He,Xe,ce,S,Qe,de,f,ze,te,Ye,Ze,oe,$e,et,ue,G,tt,fe,M,A,wt,me,x,ot,we,C,at,ye,D,N,yt,be,U,it,ve,q,st,Ie,R,O,bt,ke,F,lt,Pe,V,rt,ge,L,J,vt,_e,W,nt,Ke,v,ht,g,pt,ct,Ee,H,dt,Te,X,Q,It;return{c(){m=s("blockquote"),Y=s("p"),Me=r("I only remembered about this project 4 years later when clearing through some old boxes, so apologies if details are a bit patchy."),ae=p(),ie=s("br"),se=p(),u=s("p"),Ae=r("The general gist of this project was to create a means of collecting multiple streams of "),Z=s("em"),xe=r("XBox Kinect\xAE"),Ce=r(" camera+depth data over a local network. The primary aim was to use "),K=s("a"),De=r("Touchdesigner"),Ne=r(" to create stage visuals, however I also wanted to try using it to make a low-cost multi-camera \u2018Motion Capture\u2019 studio. The "),$=s("em"),Ue=r("Touchdesigner\xAE"),qe=r(" software already has Kinect input support (see below), however it can only support one or two Kinects directly connected to the software."),le=p(),E=s("p"),T=s("img"),re=p(),w=s("p"),Re=r("Kinect V2 cameras are generally quite cheap to buy second-hand on eBay, however they require USB 3 connections to a Windows machine. This makes it quite inconvenient to deploy them across a wide area. The plan was to make an \u2018adapter\u2019 that converted Kinect data into a compressed low-latency video stream that could be sent over a network. To stream the data, I intended to use the low-bandwidth "),k=s("a"),Oe=r("NDI Protocol"),Fe=r(". This is a lossy video compression scheme, but it\u2019s very low-latency on a local network and plenty sufficient for the low-resolution images that the kinect outputs."),ne=p(),y=s("p"),Ve=r("For this project, the ideal candiate at the time was a "),ee=s("em"),Le=r("Rock64"),Je=r(" SBC. This project pre-dates the Raspberry Pi 4, so at the time this was the only widely available board with both USB3 and Gigabit Ethernet. An overview of my intended system is shown below."),he=p(),j=s("p"),B=s("img"),pe=p(),b=s("p"),We=r("The Official Kinect SDK is Windows-only, however there is a neat project called "),P=s("a"),He=r("libreenect2"),Xe=r(" that handles a lot of the gnarly Linux driver logic and lets us extract depth data from the Kinect. The idea was to create some simple glue logic that would convert the frames into separate NDI streams. I also added a little web-based config panel (back in the days where I still thought PHP was the best thing since sliced bread!)"),ce=p(),S=s("p"),Qe=r("As with all projects, a lot of nasty issues ended up surfacing during development. For a start, the codebase for the Kinect SDK is very large, so to do any meaningful development I had to set up a cross-compiler. At the time I used Windows and seem to recall the development setup being a massive pain in the neck!"),de=p(),f=s("p"),ze=r("Moreover, it turns out that having this \u2018headless\u2019 Linux machine doing the conversions was causing its own problems. A lot of the Kinect SDK utilises GPU processing heavily. I was emulating the display using "),te=s("code"),Ye=r("xvfb"),Ze=r(", however it turns out that a load of graphics acceleration libraries don\u2019t work with virtual framebuffers. All of this nightmare was on a board with "),oe=s("em"),$e=r("virtually no documentation\u2026"),et=r("."),ue=p(),G=s("p"),tt=r("My first successful \u2018frame\u2019 of streamed data is shown below: I think at the point I got this working, it was past 3AM\u2026"),fe=p(),M=s("p"),A=s("img"),me=p(),x=s("p"),ot=r("At last some success!"),we=p(),C=s("p"),at=r("My original plan for this project was to make a run of ten Kinect \u2018adapters\u2019 to sell to a local AV company that I had done some work for in the past. In order to do this I needed to come up with a slightly neater unit that I could assemble quickly. I designed an enclosure and kinect mount in Fusion 360 (see below), and made a \u2018shield\u2019 board for the Kinect/Rock64 SBC interfacing."),ye=p(),D=s("p"),N=s("img"),be=p(),U=s("p"),it=r("The PCB is a glorified breakout board, with a few buttons and a status LED. The Kinect has a proprietary USB connector that also supplies 12V to run the depth sensor. My plan with the PCB was to break out the spliced Kinect cable, then split this off into a power and data stream."),ve=p(),q=s("p"),st=r("In retrospect, knowing what I do now about high-speed PCB layout, my design was destined to failure. My dodgy 2-layer board with double USB 3.0 connections spliced onto it naturally never worked."),Ie=p(),R=s("p"),O=s("img"),ke=p(),F=s("p"),lt=r("This meant I had two options: either buy the bulky, extortionately priced adapter that Microsoft sell, or take the Kinect apart and break out the 12V connections manually. Naturally I went for the latter! Below was my bodged approach with parallel power and data connections."),Pe=p(),V=s("p"),rt=r("Thankfully due to other software problems I never had to make these units in bulk. Suffice to say that modifying the Kinects was unecessarily tricky, with security screws everywhere."),ge=p(),L=s("p"),J=s("img"),_e=p(),W=s("p"),nt=r("So why did I abandon this project? Ultimately the use case for the networked Kinects was doing live projections and interactive stage sets. Unfortunately the project took so long that I\u2019d left my stage lighting job by the time I got a decent working prototype together!"),Ke=p(),v=s("p"),ht=r("Nearing the completion of the project, the Raspberry Pi 4 was released, featuring USB3, Gigabit Ethernet, and most importantly: good software support! The details of the project are available on "),g=s("a"),pt=r("GitHub"),ct=r(", however I\u2019d recommend basing any new work on a Pi 4 or more modern Single-Board-Computer."),Ee=p(),H=s("p"),dt=r("Still though\u2026 made a nice desk ornament for four years!"),Te=p(),X=s("p"),Q=s("img"),this.h()},l(e){m=l(e,"BLOCKQUOTE",{});var o=h(m);Y=l(o,"P",{});var kt=h(Y);Me=n(kt,"I only remembered about this project 4 years later when clearing through some old boxes, so apologies if details are a bit patchy."),kt.forEach(t),o.forEach(t),ae=c(e),ie=l(e,"BR",{}),se=c(e),u=l(e,"P",{});var I=h(u);Ae=n(I,"The general gist of this project was to create a means of collecting multiple streams of "),Z=l(I,"EM",{});var Pt=h(Z);xe=n(Pt,"XBox Kinect\xAE"),Pt.forEach(t),Ce=n(I," camera+depth data over a local network. The primary aim was to use "),K=l(I,"A",{href:!0});var gt=h(K);De=n(gt,"Touchdesigner"),gt.forEach(t),Ne=n(I," to create stage visuals, however I also wanted to try using it to make a low-cost multi-camera \u2018Motion Capture\u2019 studio. The "),$=l(I,"EM",{});var _t=h($);Ue=n(_t,"Touchdesigner\xAE"),_t.forEach(t),qe=n(I," software already has Kinect input support (see below), however it can only support one or two Kinects directly connected to the software."),I.forEach(t),le=c(e),E=l(e,"P",{});var Kt=h(E);T=l(Kt,"IMG",{src:!0,alt:!0}),Kt.forEach(t),re=c(e),w=l(e,"P",{});var je=h(w);Re=n(je,"Kinect V2 cameras are generally quite cheap to buy second-hand on eBay, however they require USB 3 connections to a Windows machine. This makes it quite inconvenient to deploy them across a wide area. The plan was to make an \u2018adapter\u2019 that converted Kinect data into a compressed low-latency video stream that could be sent over a network. To stream the data, I intended to use the low-bandwidth "),k=l(je,"A",{href:!0,rel:!0});var Et=h(k);Oe=n(Et,"NDI Protocol"),Et.forEach(t),Fe=n(je,". This is a lossy video compression scheme, but it\u2019s very low-latency on a local network and plenty sufficient for the low-resolution images that the kinect outputs."),je.forEach(t),ne=c(e),y=l(e,"P",{});var Be=h(y);Ve=n(Be,"For this project, the ideal candiate at the time was a "),ee=l(Be,"EM",{});var Tt=h(ee);Le=n(Tt,"Rock64"),Tt.forEach(t),Je=n(Be," SBC. This project pre-dates the Raspberry Pi 4, so at the time this was the only widely available board with both USB3 and Gigabit Ethernet. An overview of my intended system is shown below."),Be.forEach(t),he=c(e),j=l(e,"P",{});var jt=h(j);B=l(jt,"IMG",{src:!0,alt:!0}),jt.forEach(t),pe=c(e),b=l(e,"P",{});var Se=h(b);We=n(Se,"The Official Kinect SDK is Windows-only, however there is a neat project called "),P=l(Se,"A",{href:!0,rel:!0});var Bt=h(P);He=n(Bt,"libreenect2"),Bt.forEach(t),Xe=n(Se," that handles a lot of the gnarly Linux driver logic and lets us extract depth data from the Kinect. The idea was to create some simple glue logic that would convert the frames into separate NDI streams. I also added a little web-based config panel (back in the days where I still thought PHP was the best thing since sliced bread!)"),Se.forEach(t),ce=c(e),S=l(e,"P",{});var St=h(S);Qe=n(St,"As with all projects, a lot of nasty issues ended up surfacing during development. For a start, the codebase for the Kinect SDK is very large, so to do any meaningful development I had to set up a cross-compiler. At the time I used Windows and seem to recall the development setup being a massive pain in the neck!"),St.forEach(t),de=c(e),f=l(e,"P",{});var z=h(f);ze=n(z,"Moreover, it turns out that having this \u2018headless\u2019 Linux machine doing the conversions was causing its own problems. A lot of the Kinect SDK utilises GPU processing heavily. I was emulating the display using "),te=l(z,"CODE",{});var Gt=h(te);Ye=n(Gt,"xvfb"),Gt.forEach(t),Ze=n(z,", however it turns out that a load of graphics acceleration libraries don\u2019t work with virtual framebuffers. All of this nightmare was on a board with "),oe=l(z,"EM",{});var Mt=h(oe);$e=n(Mt,"virtually no documentation\u2026"),Mt.forEach(t),et=n(z,"."),z.forEach(t),ue=c(e),G=l(e,"P",{});var At=h(G);tt=n(At,"My first successful \u2018frame\u2019 of streamed data is shown below: I think at the point I got this working, it was past 3AM\u2026"),At.forEach(t),fe=c(e),M=l(e,"P",{});var xt=h(M);A=l(xt,"IMG",{src:!0,alt:!0}),xt.forEach(t),me=c(e),x=l(e,"P",{});var Ct=h(x);ot=n(Ct,"At last some success!"),Ct.forEach(t),we=c(e),C=l(e,"P",{});var Dt=h(C);at=n(Dt,"My original plan for this project was to make a run of ten Kinect \u2018adapters\u2019 to sell to a local AV company that I had done some work for in the past. In order to do this I needed to come up with a slightly neater unit that I could assemble quickly. I designed an enclosure and kinect mount in Fusion 360 (see below), and made a \u2018shield\u2019 board for the Kinect/Rock64 SBC interfacing."),Dt.forEach(t),ye=c(e),D=l(e,"P",{});var Nt=h(D);N=l(Nt,"IMG",{src:!0,alt:!0}),Nt.forEach(t),be=c(e),U=l(e,"P",{});var Ut=h(U);it=n(Ut,"The PCB is a glorified breakout board, with a few buttons and a status LED. The Kinect has a proprietary USB connector that also supplies 12V to run the depth sensor. My plan with the PCB was to break out the spliced Kinect cable, then split this off into a power and data stream."),Ut.forEach(t),ve=c(e),q=l(e,"P",{});var qt=h(q);st=n(qt,"In retrospect, knowing what I do now about high-speed PCB layout, my design was destined to failure. My dodgy 2-layer board with double USB 3.0 connections spliced onto it naturally never worked."),qt.forEach(t),Ie=c(e),R=l(e,"P",{});var Rt=h(R);O=l(Rt,"IMG",{src:!0,alt:!0}),Rt.forEach(t),ke=c(e),F=l(e,"P",{});var Ot=h(F);lt=n(Ot,"This meant I had two options: either buy the bulky, extortionately priced adapter that Microsoft sell, or take the Kinect apart and break out the 12V connections manually. Naturally I went for the latter! Below was my bodged approach with parallel power and data connections."),Ot.forEach(t),Pe=c(e),V=l(e,"P",{});var Ft=h(V);rt=n(Ft,"Thankfully due to other software problems I never had to make these units in bulk. Suffice to say that modifying the Kinects was unecessarily tricky, with security screws everywhere."),Ft.forEach(t),ge=c(e),L=l(e,"P",{});var Vt=h(L);J=l(Vt,"IMG",{src:!0,alt:!0}),Vt.forEach(t),_e=c(e),W=l(e,"P",{});var Lt=h(W);nt=n(Lt,"So why did I abandon this project? Ultimately the use case for the networked Kinects was doing live projections and interactive stage sets. Unfortunately the project took so long that I\u2019d left my stage lighting job by the time I got a decent working prototype together!"),Lt.forEach(t),Ke=c(e),v=l(e,"P",{});var Ge=h(v);ht=n(Ge,"Nearing the completion of the project, the Raspberry Pi 4 was released, featuring USB3, Gigabit Ethernet, and most importantly: good software support! The details of the project are available on "),g=l(Ge,"A",{href:!0,rel:!0});var Jt=h(g);pt=n(Jt,"GitHub"),Jt.forEach(t),ct=n(Ge,", however I\u2019d recommend basing any new work on a Pi 4 or more modern Single-Board-Computer."),Ge.forEach(t),Ee=c(e),H=l(e,"P",{});var Wt=h(H);dt=n(Wt,"Still though\u2026 made a nice desk ornament for four years!"),Wt.forEach(t),Te=c(e),X=l(e,"P",{});var Ht=h(X);Q=l(Ht,"IMG",{src:!0,alt:!0}),Ht.forEach(t),this.h()},h(){d(K,"href","/tutorials/Touchdesigner_Image_DMX"),_(T.src,ft="https://cdn.bojit.org/img/posts/KinectIP-Depth.PNG")||d(T,"src",ft),d(T,"alt","Depth.PNG"),d(k,"href","https://ndi.video/type/ndi-tools/"),d(k,"rel","nofollow"),_(B.src,mt="https://cdn.bojit.org/img/posts/KinectIP-System.PNG")||d(B,"src",mt),d(B,"alt","System.PNG"),d(P,"href","https://github.com/OpenKinect/libfreenect2"),d(P,"rel","nofollow"),_(A.src,wt="https://cdn.bojit.org/img/posts/KinectIP-First-Decode.JPG")||d(A,"src",wt),d(A,"alt","First_Decode.JPG"),_(N.src,yt="https://cdn.bojit.org/img/posts/KinectIP-Render.PNG")||d(N,"src",yt),d(N,"alt","Render.PNG"),_(O.src,bt="https://cdn.bojit.org/img/posts/KinectIP-PCB.PNG")||d(O,"src",bt),d(O,"alt","PCB.PNG"),_(J.src,vt="https://cdn.bojit.org/img/posts/KinectIP-Internals.JPG")||d(J,"src",vt),d(J,"alt","Internals.PNG"),d(g,"href","https://github.com/BOJIT/KinectIP/"),d(g,"rel","nofollow"),_(Q.src,It="https://cdn.bojit.org/img/posts/KinectIP-Outside.JPG")||d(Q,"src",It),d(Q,"alt","Outside.JPG")},m(e,o){i(e,m,o),a(m,Y),a(Y,Me),i(e,ae,o),i(e,ie,o),i(e,se,o),i(e,u,o),a(u,Ae),a(u,Z),a(Z,xe),a(u,Ce),a(u,K),a(K,De),a(u,Ne),a(u,$),a($,Ue),a(u,qe),i(e,le,o),i(e,E,o),a(E,T),i(e,re,o),i(e,w,o),a(w,Re),a(w,k),a(k,Oe),a(w,Fe),i(e,ne,o),i(e,y,o),a(y,Ve),a(y,ee),a(ee,Le),a(y,Je),i(e,he,o),i(e,j,o),a(j,B),i(e,pe,o),i(e,b,o),a(b,We),a(b,P),a(P,He),a(b,Xe),i(e,ce,o),i(e,S,o),a(S,Qe),i(e,de,o),i(e,f,o),a(f,ze),a(f,te),a(te,Ye),a(f,Ze),a(f,oe),a(oe,$e),a(f,et),i(e,ue,o),i(e,G,o),a(G,tt),i(e,fe,o),i(e,M,o),a(M,A),i(e,me,o),i(e,x,o),a(x,ot),i(e,we,o),i(e,C,o),a(C,at),i(e,ye,o),i(e,D,o),a(D,N),i(e,be,o),i(e,U,o),a(U,it),i(e,ve,o),i(e,q,o),a(q,st),i(e,Ie,o),i(e,R,o),a(R,O),i(e,ke,o),i(e,F,o),a(F,lt),i(e,Pe,o),i(e,V,o),a(V,rt),i(e,ge,o),i(e,L,o),a(L,J),i(e,_e,o),i(e,W,o),a(W,nt),i(e,Ke,o),i(e,v,o),a(v,ht),a(v,g),a(g,pt),a(v,ct),i(e,Ee,o),i(e,H,o),a(H,dt),i(e,Te,o),i(e,X,o),a(X,Q)},p:ut,i:ut,o:ut,d(e){e&&t(m),e&&t(ae),e&&t(ie),e&&t(se),e&&t(u),e&&t(le),e&&t(E),e&&t(re),e&&t(w),e&&t(ne),e&&t(y),e&&t(he),e&&t(j),e&&t(pe),e&&t(b),e&&t(ce),e&&t(S),e&&t(de),e&&t(f),e&&t(ue),e&&t(G),e&&t(fe),e&&t(M),e&&t(me),e&&t(x),e&&t(we),e&&t(C),e&&t(ye),e&&t(D),e&&t(be),e&&t(U),e&&t(ve),e&&t(q),e&&t(Ie),e&&t(R),e&&t(ke),e&&t(F),e&&t(Pe),e&&t(V),e&&t(ge),e&&t(L),e&&t(_e),e&&t(W),e&&t(Ke),e&&t(v),e&&t(Ee),e&&t(H),e&&t(Te),e&&t(X)}}}const eo={title:"KinectIP",date:"24-07-2019",published:!0,hidden:!1,tile:{type:"image",image:"/tiles/2019-07-24-KinectIP.PNG"}};class to extends Qt{constructor(m){super(),zt(this,m,null,Zt,Yt,{})}}export{to as default,eo as metadata};
