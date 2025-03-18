window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        document.querySelector('header').style.transform = 'translateY(-100%)';
    } else {
        document.querySelector('header').style.transform = 'translateY(0)';
    }
});

let ligthTheme = true;

document.getElementById('icon').addEventListener('click', () => {
    if (ligthTheme == true) {
        document.querySelector('body').style.backgroundColor = '#212529';
        document.querySelector('header').style.backgroundColor = '#212529';
        document.querySelector('header').style.borderBottom = '1px solid rgba(75, 75, 75, 0.4)';
        document.querySelector('footer').style.borderTop = '1px solid rgba(75, 75, 75, 0.4)';

        document.getElementById('icon').style.borderLeft = '1px solid rgba(75, 75, 75, 0.4)';
        document.getElementById('icon').innerHTML =
            '<i id="switchTheme" class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        document.getElementById('widget').style.backgroundColor = '#292D31';
        document.querySelectorAll('.title').forEach((el) => {
            el.style.color = '#9FA6AD';
        });
        document.querySelectorAll('.post_type').forEach((el) => {
            el.style.color = 'rgb(158, 158, 158)';
        });
        if (window.innerWidth >= 920) {
            document.querySelectorAll('.left_side').forEach((el) => {
                el.style.borderRight = '1px solid rgba(75, 75, 75, 0.4)';
            });
        } else {
            document.querySelectorAll('.left_side').forEach((el) => {
                el.style.borderRight = 'none';
                el.style.borderBottom = '1px solid rgba(75, 75, 75, 0.4)';
            });
        }
        document.querySelectorAll('.nav_el').forEach((el) => {
            el.style.color = 'rgb(168, 168, 168)';
        });

        ligthTheme = !ligthTheme;
    } else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('header').style.backgroundColor = 'white';
        document.querySelector('header').style.borderBottom = '1px solid rgba(197, 197, 197, 0.397)';
        document.querySelector('footer').style.borderTop = '1px solid rgba(197, 197, 197, 0.397)';

        document.getElementById('icon').style.borderLeft = '1px solid rgba(197, 197, 197, 0.397)';
        document.getElementById('icon').innerHTML = '<i id="switchTheme" class="fa-regular fa-moon"></i>';

        document.getElementById('widget').style.backgroundColor = '#f3f7f9';
        document.querySelectorAll('.title').forEach((el) => {
            el.style.color = '#0000cd';
        });
        document.querySelectorAll('.post_type').forEach((el) => {
            el.style.color = 'black';
        });
        if (window.innerWidth >= 920) {
            document.querySelectorAll('.left_side').forEach((el) => {
                el.style.borderRight = '1px solid rgba(197, 197, 197, 0.397)';
            });
        } else {
            document.querySelectorAll('.left_side').forEach((el) => {
                el.style.borderRight = 'none';
                el.style.borderBottom = '1px solid rgba(197, 197, 197, 0.397)';
            });
        }

        document.querySelectorAll('.nav_el').forEach((el) => {
            el.style.color = '#0000cd';
        });
        ligthTheme = !ligthTheme;
    }
});
