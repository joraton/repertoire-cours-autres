'use client';
import { ExternalLink, Eye, Clock, XCircle, BookOpen, Calculator } from 'lucide-react';

interface ChapterLink {
  id: number;
  chapterNumber: string;
  title: string;
  url: string;
  status: 'active' | 'inactive' | 'coming-soon';
  category: string;
  subcategory?: string;
}

interface GroupedChapters {
  [category: string]: {
    [subcategory: string]: ChapterLink[];
  };
}

export default function ChapterTable({ chapters }: { chapters: ChapterLink[] }) {
  const getStatusIcon = (status: ChapterLink['status']) => {
    switch (status) {
      case 'active':
        return <Eye className="h-5 w-5 text-emerald-500 drop-shadow-sm" />;
      case 'coming-soon':
        return <Clock className="h-5 w-5 text-amber-500 drop-shadow-sm" />;
      case 'inactive':
        return <XCircle className="h-5 w-5 text-rose-500 drop-shadow-sm" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-400 drop-shadow-sm" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'finance': return <Calculator className="h-6 w-6 text-blue-600" />;
      case 'contrôle de gestion': return <BookOpen className="h-6 w-6 text-emerald-600" />;
      default: return <BookOpen className="h-6 w-6 text-slate-600" />;
    }
  };

  // Group chapters by category and subcategory
  const groupedChapters = chapters.reduce((acc: GroupedChapters, chapter) => {
    const category = chapter.category;
    const subcategory = chapter.subcategory || 'Général';
    
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(chapter);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
      {Object.entries(groupedChapters).map(([category, subcategories]) => (
        <div key={category} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
           {/* Category Header */}
           <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 px-6 py-5 border-b border-gray-200">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-white rounded-lg shadow-sm">
                 {getCategoryIcon(category)}
               </div>
               <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{category}</h2>
             </div>
           </div>

          {/* Subcategories */}
          {Object.entries(subcategories).map(([subcategory, chapterList]) => (
            <div key={subcategory} className="border-b last:border-b-0 border-gray-100">
              {subcategory !== 'Général' && (
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {subcategory}
                  </h3>
                </div>
              )}
              
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full table-fixed">
                   <colgroup>
                     <col className="w-20" />
                     <col />
                     <col className="w-40" />
                   </colgroup>
                   <thead>
                     <tr className="bg-gradient-to-r from-slate-50 to-blue-50">
                       <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                         Chapitre
                       </th>
                       <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                         Titre
                       </th>
                       <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                         Lien
                       </th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {chapterList
                       .sort((a, b) => parseInt(a.chapterNumber) - parseInt(b.chapterNumber))
                       .map((chapter, index) => (
                         <tr key={chapter.id} className={`transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm ${
                           index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                         }`}>
                            <td className="px-6 py-5 text-center align-top">
                              <div className="flex items-center justify-center gap-2">
                                {getStatusIcon(chapter.status)}
                                <span className="font-semibold text-gray-800">{chapter.chapterNumber}</span>
                              </div>
                            </td>
                            <td className="px-6 py-5 font-medium text-gray-800 text-center align-top">
                              {chapter.title}
                            </td>
                            <td className="px-6 py-5 text-center align-top">
                              {chapter.status === 'active' ? (
                                <a
                                  href={chapter.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                  Accéder <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              ) : (
                                <span className="text-gray-400">Non disponible</span>
                              )}
                            </td>
                          </tr>
                       ))}
                   </tbody>
                 </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4 p-4">
                {chapterList
                  .sort((a, b) => parseInt(a.chapterNumber) - parseInt(b.chapterNumber))
                  .map((chapter) => (
                    <div key={chapter.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(chapter.status)}
                          <span className="font-bold text-lg text-gray-800">Chapitre {chapter.chapterNumber}</span>
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-800 mb-4 text-center">{chapter.title}</h3>
                      <div className="flex justify-center">
                        {chapter.status === 'active' ? (
                          <a
                            href={chapter.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg w-full justify-center"
                          >
                            Accéder <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-gray-400 text-center w-full py-3">Non disponible</span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}