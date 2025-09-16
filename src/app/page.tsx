'use client';
import ChapterTable from '@/components/ChapterTable';
import { Database, User } from 'lucide-react';

interface ChapterLink {
  id: number;
  chapterNumber: string;
  title: string;
  url: string;
  status: 'active' | 'inactive' | 'coming-soon';
  category: string;
  subcategory?: string;
}

const chaptersData: ChapterLink[] = [
  // Finance - Lewyne
  {
    id: 1,
    chapterNumber: "1",
    title: "Évaluation Financière",
    url: "https://lewyne-1.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Lewyne"
  },
  {
    id: 2,
    chapterNumber: "2",
    title: "Les Options Financières",
    url: "https://lewyne-2.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Lewyne"
  },
  {
    id: 3,
    chapterNumber: "3",
    title: "Les Décisions de Financement",
    url: "https://lewyne-3.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Lewyne"
  },
  // Finance - Dietz
  {
    id: 4,
    chapterNumber: "1",
    title: "Choix de financement",
    url: "https://dietz-choixfi.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Dietz"
  },
  {
    id: 28,
    chapterNumber: "2",
    title: "diagnostic financier",
    url: "https://diagnostic-financier-ncy0vnfja-jorations-projects.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Dietz"
  },
  // Finance - Cours de Delagarde - Thème 1
  {
    id: 8,
    chapterNumber: "1",
    title: "La Valeur en Finance",
    url: "https://finance-chap1.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 9,
    chapterNumber: "2",
    title: "La valeur et le temps : intérêts simples et composés",
    url: "https://finance-chap2.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 10,
    chapterNumber: "3",
    title: "La Rentabilité et le Risque d'une Action",
    url: "https://finance-chap3.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 11,
    chapterNumber: "4",
    title: "La Valeur d'une Action",
    url: "https://finance-chap4.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 12,
    chapterNumber: "5",
    title: "Coût des Capitaux Propres et Coût du Capital",
    url: "https://finance-chapitre5.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 13,
    chapterNumber: "6",
    title: "Obligation",
    url: "https://finance-chapitre6.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  {
    id: 14,
    chapterNumber: "7",
    title: "Gestion de patrimoine",
    url: "https://finance-chapitre7.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 1"
  },
  // Finance - Cours de Delagarde - Thème 5
  {
    id: 15,
    chapterNumber: "1",
    title: "Gestion de tréso de groupe",
    url: "https://finance-chapitre1.vercel.app",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 5"
  },
  {
    id: 16,
    chapterNumber: "2",
    title: "La Gestion des Risques au Niveau de la Trésorerie",
    url: "https://finance-th5-chap2.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 5"
  },
  {
    id: 17,
    chapterNumber: "3",
    title: "Risques de changes",
    url: "https://finance-th5-chap3.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 5"
  },
  {
    id: 18,
    chapterNumber: "4",
    title: "Risques de taux",
    url: "https://chapitre-4-theme5-v47u.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 5"
  },
  {
    id: 19,
    chapterNumber: "5",
    title: "lutte anti-blanchiement jamais tombé",
    url: "",
    status: 'coming-soon' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 5"
  },
  // Finance - Cours de Delagarde - Thème 6
  {
    id: 21,
    chapterNumber: "1",
    title: "Introduction en Bourse (IPO)",
    url: "https://finance-th6-chap1.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 22,
    chapterNumber: "2",
    title: "Politique de Dividendes",
    url: "https://financeth6chap2.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 23,
    chapterNumber: "3",
    title: "Les rachats d'actions",
    url: "https://finance-course-site.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 24,
    chapterNumber: "4",
    title: "Finance d'Entreprise",
    url: "https://financeth6chap4.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 25,
    chapterNumber: "5",
    title: "Fusions-Acquisitions",
    url: "https://chapitre-5-theme6-oj9q.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 26,
    chapterNumber: "6",
    title: "Les Offres Publiques d'Achat et d'Échange",
    url: "https://chapitre-6-theme6.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  {
    id: 27,
    chapterNumber: "7",
    title: "Le Leveraged Buy Out (LBO)",
    url: "https://chapitre-7-theme6.vercel.app/",
    status: 'active' as const,
    category: "Finance",
    subcategory: "Cours de Delagarde - Thème 6"
  },
  // Fiches
  {
    id: 20,
    chapterNumber: "1",
    title: "Pour revoir les 3 méthodes d'évaluations en détail",
    url: "https://fiche-eval.vercel.app/",
    status: 'active' as const,
    category: "Fiches",
    subcategory: "Finance"
  },
  // Contrôle de Gestion
  {
    id: 5,
    chapterNumber: "1",
    title: "concepts fondamentaux du contrôle de gestion",
    url: "https://cours-cdg-chap1.vercel.app/",
    status: 'active' as const,
    category: "Contrôle de Gestion"
  },
  {
    id: 6,
    chapterNumber: "2",
    title: "Les outils de pilotage stratégique et budgétaire de l'entreprise",
    url: "https://cours-cdg-2.vercel.app/",
    status: 'active' as const,
    category: "Contrôle de Gestion"
  },
  {
    id: 7,
    chapterNumber: "3",
    title: "Pilotage de la performance",
    url: "https://cours-cdg-chap3.vercel.app/",
    status: 'active' as const,
    category: "Contrôle de Gestion"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Database className="h-6 w-6 md:h-8 md:w-8" />
            <h1 className="text-2xl md:text-4xl font-bold">Base de Données Chapitres</h1>
          </div>
          <p className="text-lg md:text-xl opacity-90">Liens vers tous les sites par chapitre</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ChapterTable chapters={chaptersData} />
      </main>

      {/* Credit Block */}
      <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 md:h-5 md:w-5" />
            <div>
              <div className="font-bold text-xs md:text-sm">Darmouni Jonathan</div>
              <div className="text-xs opacity-90 hidden md:block">Développeur Full-Stack & Étudiant DSCG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}