import { AfterViewInit, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit{

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.updateActiveLink();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });
  }

  private updateActiveLink() {
    document.querySelectorAll('#navmenu a').forEach(link => {
      if (link instanceof HTMLAnchorElement) {
        const linkPath = link.getAttribute('href');
        const currentPath = this.router.url;

        if (linkPath && currentPath.includes(linkPath)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    const clickedElement = event.currentTarget as HTMLElement;
    const dropdownMenu = clickedElement.nextElementSibling as HTMLElement;
    
    // Fermer tous les autres dropdowns
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      if (menu !== dropdownMenu) {
        menu.classList.remove('show');
      }
    });
    
    // Toggle le dropdown cliqué
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  }

}


