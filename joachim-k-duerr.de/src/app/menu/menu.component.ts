import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  openDropDownMenu() {
    console.log('Opening Drop-Down-Menu');
    let dropdown:HTMLElement = document.getElementById('dropdown-menu') as HTMLElement;
    let burger:HTMLElement = document.getElementById('burger-menu-image') as HTMLElement;
    dropdown.classList.remove('d-none');
    burger.classList.add('d-none');
    let h = window.outerHeight;
    let w = outerWidth;
    alert(`height: ${h} px  width: ${w} px`);
  }

  closeDropDownMenu() {
    console.log('Closing Drop-Down-Menu');
    let dropdown:HTMLElement = document.getElementById('dropdown-menu') as HTMLElement;
    let burger:HTMLElement = document.getElementById('burger-menu-image') as HTMLElement;
    dropdown.classList.add('d-none');
    burger.classList.remove('d-none');
  }
}
