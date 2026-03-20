document.addEventListener("DOMContentLoaded", ()=>{
    //scroll to animation
    const homeTrigger = document.getElementById('home')
    const aboutMeTrigger = document.getElementById('nav-about-me')
    const resumeTrigger = document.getElementById('resume')
    const veilleTrigger = document.getElementById('veille')
    const contactTrigger = document.getElementById('contact')

    homeTrigger.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
    aboutMeTrigger.addEventListener('click', ()=>{
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        });
    })
    resumeTrigger.addEventListener('click', ()=>{
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        });
    })

    //socials selector arrow
    const linkedIn = document.getElementById('LinkedIn')
    const github = document.getElementById('GitHub')
    const gitlab = document.getElementById('GitLab')

    const linkedInArrow = document.getElementById('linkedIn-arrow')
    const githubArrow = document.getElementById('GitHub-arrow')
    const gitlabArrow = document.getElementById('GitLab-arrow')

    linkedIn.addEventListener('mouseover', () =>{
        linkedInArrow.classList.remove('d-none')
        document.body.style.cursor = "pointer"
    })
    linkedIn.addEventListener('mouseout', () =>{
        linkedInArrow.classList.add('d-none')
        document.body.style.cursor = "auto"
    })

    github.addEventListener('mouseover', () =>{
        githubArrow.classList.remove('d-none')
        document.body.style.cursor = "pointer"
    })
    github.addEventListener('mouseout', () =>{
        githubArrow.classList.add('d-none')
        document.body.style.cursor = "auto"
    })

    gitlab.addEventListener('mouseover', () =>{
        gitlabArrow.classList.remove('d-none')
        document.body.style.cursor = "pointer"
    })
    gitlab.addEventListener('mouseout', () =>{
        gitlabArrow.classList.add('d-none')
        document.body.style.cursor = "auto"
    })

    linkedIn.addEventListener('click', ()=>{
        location.href="https://www.linkedin.com/in/sono-nana-yaw-antwi-39797633b/"
    })
    github.addEventListener('click', ()=>{
        location.href="https://github.com/Ceagen"
    })
    gitlab.addEventListener('click', ()=>{
        location.href="https://gitlab-sio.lycee-ozenne.fr/SONON"
    })
    
    document.querySelectorAll('.click-me').forEach(button =>{
        button.addEventListener('mouseover', ()=>{
            document.body.style.cursor = "pointer"
        })
        button.addEventListener('mouseout', ()=>{
            document.body.style.cursor = "auto"
        })

        const type = button.dataset.type

        button.addEventListener('click', ()=>{
            switch(type){
                case('slots'):
                    window.location.href = "https://github.com/Ceagen/Slots"
                    break
                case('gsb'):
                    window.location.href = "https://github.com/Ceagen/GSB"
                    break
                case('calculator'):
                    window.location.href = "https://github.com/Ceagen/Projet/tree/main/Portfolio/Calculator"
                    break

                //cerifications
                case('enCours'):
                    window.location.href = "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png"
                    break
                case('pix-2024'):
                    window.open("/static/certification/certification-pix-nana-ozenne-2024.pdf")
                    break
                case('pix-2026'):
                    window.open("/static/certification/certification-pix-nana-ozenne-2026.pdf")
                    break
            }
        })
    })

    //verification of the viewport
    function updateSocialMediaVisibility() {
        const containerSocial = document.getElementById('container-social-media');
        if (window.innerWidth <= 1137) {
          containerSocial.classList.add('d-none');
        } else {
          containerSocial.classList.remove('d-none');
        }
    }

    updateSocialMediaVisibility()
    window.addEventListener('resize', updateSocialMediaVisibility);

    if(window.innerWidth > 768){
        let lastScroll = window.scrollY;
        let timeout;
        
        const runUp = document.getElementById("runUp");
        const runDown = document.getElementById("runDown");
        const idle = document.getElementById("idle");
        
        function show(state){
          runUp.style.display = "none";
          runDown.style.display = "none";
          idle.style.display = "none";
        
          state.style.display = "block";
        }
        
        window.addEventListener("scroll", () => {
          const currentScroll = window.scrollY;
        
          // scrolling down
          if(currentScroll > lastScroll){
            show(runDown);
          }
          // scrolling up
          else if(currentScroll < lastScroll){
            show(runUp);
          }
      
          lastScroll = currentScroll;
      
          // detect stop scrolling
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            show(idle);
          }, 150); // adjust delay if needed
        });
    
        const section = document.querySelector(".parcours-section");
    
        window.addEventListener("scroll", () => {
        
          const rect = section.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
        
          if(!inView) return; // stop logic outside section
        
          const currentScroll = window.scrollY;
        
          if(currentScroll > lastScroll){
            show(runDown);
          } else if(currentScroll < lastScroll){
            show(runUp);
          }
      
          lastScroll = currentScroll;
      
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            show(idle);
          }, 150);
        });
    
        function show(state){
          [runUp, runDown, idle].forEach(el => el.classList.remove("active"));
          state.classList.add("active");
        }
    }
})