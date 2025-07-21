import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

   projects = [
    {
      id: 'p001',
      title: 'Application de Prédiction Cancer',
      description: 'Un projet Flask + Angular pour prédire les réponses aux traitements du cancer à partir de données multi-omiques.',
      techStack: ['Angular', 'Flask', 'R', 'Python'],
      link: '#'
    },
    {
      id: 'p002',
      title: 'Plateforme E-commerce',
      description: 'Développement d\'une boutique en ligne moderne avec gestion de panier et Wishlist.',
      techStack: ['Angular', 'Bootstrap', 'Firebase'],
      link: '#'
    },
    {
      id: 'p003',
      title: 'Dashboard Analyse Data',
      description: 'Dashboard interactif pour visualiser des données analytiques pour un client.',
      techStack: ['Python', 'Dash', 'Plotly'],
      link: '#'
    }
  ];

}
