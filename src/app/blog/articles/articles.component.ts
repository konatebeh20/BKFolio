import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles = [
    { id: '001', title: 'Analyse Bayésienne pour le Cancer', date: '2024-06-20', link: '#' },
    { id: '002', title: 'Clustering K-means sur Données Réelles', date: '2024-05-10', link: '#' },
    { id: '003', title: 'Machine Learning pour Débutants', date: '2024-04-01', link: '#' }
  ];

}
