import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../main/includes/header/header.component';
import { FooterComponent } from '../../main/includes/footer/footer.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles = [
    // 
    { 
      id: '001', 
      title: 'segmentation client automatisée pour la recommandation marketing', 
      date: '2025-07-22',
      link: 'assets/articles/001_segmentation_client_pour_recommandation_marketing.pdf', 
    },
    { 
      id: '002', 
      title: 'Analyse Bayésienne pour le Cancer', 
      date: '2024-06-20',
      link: 'assets/articles/002_analyse_bayesienne_cancer.pdf', 
    },
    { 
      id: '003', 
      title: 'Clustering K-means sur Données Réelles', 
      date: '2024-05-10', 
      link: 'assets/articles/003_clustering_kmeans.pdf'
    },
    { 
      id: '004', 
      title: 'Machine Learning pour Débutants', 
      date: '2024-04-01',
      link: 'assets/articles/003_ml_pour_debutants.pdf',
    }
  ];

}
