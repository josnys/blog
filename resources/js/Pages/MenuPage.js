import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import Layout from '@/Shared/Site/Layout';
import TitleSeparator from '@/Shared/Site/TitleSeparator';
import { currencyFormat } from '@/utils';

const MenuPage = () => {
     const { app, auth, info } = usePage().props;
     return (
          <React.Fragment key="app">
               <Helmet title={info.page_title} />
                    <section className="w-full pt-8 bg-slate-50 dark:bg-slate-500">
                         <div className="container mx-auto p-4">
                              <article className="w-full">
                                   <h1 className="text-center text-4xl font-semibold text-red-800 dark:text-red-500">{info.categories[0].name}</h1>
                                   <TitleSeparator />
                                   <div className="w-full">
                                        {(info.categories[0].subs.length > 0) && (<div className="w-full mt-4 flex items-center justify-center space-x-4">
                                             {info.categories[0].subs.map(({id, name, photo, url},i) => {
                                                  return <InertiaLink key={`subcat${i}`} href={route('site.menu', url)} className="px-2 text-center text-slate-500 hover:font-semibold focus:font-semibold rounded-full transition ease-in-out delay-75 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 dark:hover:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                                                       {name}
                                                  </InertiaLink>
                                             })}
                                        </div>)}
                                   </div>
                              </article>
                         </div>
                    </section>
                    {(info.data.products.data.length > 0) && (<section className="w-full pt-8 bg-slate-200 dark:bg-slate-600 dark:text-red-500">
                         <div className="container mx-auto p-4">
                              <h2 className="text-center text-2xl font-semibold text-slate-600 dark:text-red-500">{info.data.products.title}</h2>
                              <div className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3">
                                   {info.data.products.data.map(({id, url, image, title, intro, currency, price},i) => {
                                        return <div key={`prod${i}`} className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                             <img className="object-cover w-full h-64" src={image} alt={title}/>
                                             <div className="p-6">
                                                  <div>
                                                       <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{title}</a>
                                                       <span className="text-md font-semibold text-green-600 uppercase dark:text-green-400">{currencyFormat(price, currency)}</span>
                                                       <div className="mt-2 text-sm text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: intro}}></div>
                                                  </div>
                                             </div>
                                        </div>
                                   })}
                              </div>
                         </div>
                    </section>)}
          </React.Fragment>
     );
}

MenuPage.layout = page => <Layout children={page} header={'Menu Page'} showHero={false} />

export default MenuPage;
