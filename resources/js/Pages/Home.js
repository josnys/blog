import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import Layout from '@/Shared/Site/Layout';
import TitleSeparator from '@/Shared/Site/TitleSeparator';

const Home = () => {
     const { app, auth, info } = usePage().props;
     return (
          <React.Fragment key="app">
               <Helmet title={info.page_title} />
               <section className="w-full pt-8 bg-slate-50 dark:bg-slate-500">
                    <div className="container mx-auto p-4">
                         <article className="w-full">
                              <h1 className="text-center text-4xl font-semibold text-red-800 dark:text-red-500">{info.site.title}</h1>
                              <h3 className="text-center font-light italic text-gray-600 dark:text-gray-700">{info.site.slogan}</h3>
                              <TitleSeparator />
                              <div className="mt-4 prose max-w-none prose-p:w-full prose-p:p-0 text-gray-700 dark:text-gray-300 text-justify text-ellipsis">
                                   <article dangerouslySetInnerHTML={{__html: info.site.content}}></article>
                              </div>
                         </article>
                    </div>
               </section>

               {(info.features.category.data.length > 0) && (<section className="w-full pt-8 bg-slate-200 dark:bg-slate-600 dark:text-red-500">
                    <div className="container mx-auto p-4">
                         <h1 className="text-center text-4xl font-semibold text-red-800 dark:text-red-500">{info.features.category.title}</h1>
                         <TitleSeparator />
                         <div className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
                              {info.features.category.data.map(({url, photo, name},i) => {
                                   return <InertiaLink key={`cat${i}`} href={route('site.menu', url)} className="w-full p-2 text-center rounded-lg transition ease-in-out delay-75 hover:bg-slate-300 focus:bg-slate-300 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={photo} alt={name}/>
                                        <div className="mt-2">
                                             <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{name}</h3>
                                        </div>
                                   </InertiaLink>
                              })}
                         </div>
                    </div>
               </section>)}
          </React.Fragment>
     );
}

Home.layout = page => <Layout children={page} header={'Home'} showHero={true} />

export default Home;
