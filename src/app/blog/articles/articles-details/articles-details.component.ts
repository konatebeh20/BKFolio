import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articles-details.component.html',
  styleUrl: './articles-details.component.scss'
})
export class ArticlesDetailsComponent {

  articleId = '';
  article: any;

  articles = [
    {
      id: '001',
      title: 'Segmentation client automatisée pour la recommandation marketing',
      date: '2025-07-22',
      content: [
        'Introduction...',
        'Revue de littérature...',
        'Méthodologie...',
        'Implémentation et architecture technique...',
        'Résultats expérimentaux...',
        'Discussion et analyse critique...',
        'Conclusion...',
        'Bibliographie...',
      ],
      pdf: 'assets/docs/articles/001_Segmentation_client_automatisée_pour_la_recommandation_marketing.pdf'
    },
    {
      id: '002',
      title: 'Analyse Bayésienne pour le Diagnostic et le Pronostic du Cancer : Une Approche Statistique Moderne en Oncologie',
      date: '2025-07-22',
      content: [
        'Introduction...',
        'Revue de littérature...',
        'Méthodologie...',
        'Implémentation technique...',
        'Résultats expérimentaux...',
        'Applications cliniques...',
        'Discussion critique...',
        'Impact clinique et économique...',
        'Conclusion...',
        'Bibliographie...',
      ],
      pdf: 'assets/docs/articles/002_Analyse_Bayésienne_pour_le_Diagnostic_et_le_Pronostic_du_Cancer_Une_Approche_Statistique_Moderne_en_Oncologie.pdf'
    },
    // Ajoute les autres articles ici
  ];

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      this.article = this.articles.find(a => a.id === this.articleId);
    });
  }


}
