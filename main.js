// const nav_down=document.querySelector("hamburg");
function Menu(e){
      let list = document.querySelector('ul');
      console.log(e.name)
      e.name === 'menu' ? (e.name = "close",list.classList.add('left-0'),list.classList.remove('left-[-765px]'),list.classList.add("z-10") , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('left-0'),list.classList.remove('opacity-100'),list.classList.add('left-[-765px]') )
    }