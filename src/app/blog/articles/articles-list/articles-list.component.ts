import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {

   articles = [
    // 
    { 
      id: '001', 
      title: 'segmentation client automatisée pour la recommandation marketing', 
      date: '2025-07-22',
      link: 'assets/docs/articles/001_Segmentation_client_automatisée_pour_la_recommandation_marketing.pdf', 
    },
    { 
      id: '002', 
      title: 'Analyse Bayésienne pour le Diagnostic et le Pronostic du Cancer : Une Approche Statistique Moderne en Oncologie', 
      date: '2025-07-22',
      link: 'assets/docs/articles/002_Analyse_Bayésienne_pour_le_Diagnostic_et_le_Pronostic_du_Cancer_Une_Approche_Statistique_Moderne_en_Oncologie.pdf', 
    },
    // { 
    //   id: '003', 
    //   title: 'Clustering K-means sur Données Réelles', 
    //   date: '2024-05-10', 
    //   link: 'assets/docs/articles/003_clustering_kmeans.pdf'
    // },
    // { 
    //   id: '004', 
    //   title: 'Machine Learning pour Débutants', 
    //   date: '2024-04-01',
    //   link: 'assets/docs/articles/003_ml_pour_debutants.pdf',
    // }
  ];

}
