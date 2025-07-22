import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  projects  = [
    {
      id: 1,
      category: 'Web Design',
      title: 'Modern Dashboard Interface',
      description: 'Interface de tableau de bord moderne et intuitif.',
      imageUrl: 'assets/img/portfolio/app-1.jpg',
      filter: 'filter-web',
    },
    {
      id: 2,
      category: 'Graphics',
      title: 'Creative Brand Identity',
      description: 'Identité visuelle créative pour une marque.',
      imageUrl: 'assets/img/portfolio/product-1.jpg',
      filter: 'filter-graphics',
    },
    {
      id: 3,
      category: 'Graphics',
      title: 'Creative Brand Identity',
      description: 'Identité visuelle créative pour une marque.',
      imageUrl: 'assets/img/portfolio/branding-1.jpg',
      filter: 'filter-graphics',
    },
    {
      id: 4,
      category: 'Motion',
      title: 'Product Animation Reel',
      description: 'Donec ullamcorper nulla non metus auctor fringilla dapibus.',
      imageUrl: 'assets/img/portfolio/books-1.jpg',
      filter: 'filter-Motion',
    },
    // Ajoute tes autres projets ici
  ];
}
