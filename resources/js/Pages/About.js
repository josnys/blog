import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import Layout from '@/Shared/Site/Layout';
import TitleSeparator from '@/Shared/Site/TitleSeparator';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const About = () => {
     const { app, auth, info } = usePage().props;

     const iconSun = classNames('w-8 h-8', {
          'text-slate-300 fill-current': false,
          'text-slate-300 hover:text-red-700 focus:text-red-700 fill-current': true
     });

     return (
          <React.Fragment key="app">
               <Helmet title={info.page_title} />
               <section className="w-full pt-8 bg-slate-50 dark:bg-slate-500">
                    <div className="container px-6 py-8 mx-auto">
                         <div className="lg:flex">
                              <div className="lg:w-2/3 pr-4">
                                   <h2 className="text-3xl font-bold text-red-700 dark:text-gray-600">{info.title}</h2>
                                   <div className="mt-4 prose max-w-none prose-p:w-full prose-p:p-0 text-gray-700 dark:text-gray-300 text-justify text-ellipsis">
                                        <article dangerouslySetInnerHTML={{__html: info.content}}></article>
                                   </div>
                              </div>
                              <div className="mt-8 lg:mt-0 lg:w-1/3">
                                 <div className="w-full">
                                     <div className="w-full">
                                         <img className="object-cover object-center w-full h-64 rounded-md shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt={info.title} />
                                     </div>

                                     <div class="w-full flex items-center justify-center mt-6">
                                          {info.twitter && (<a className="mx-2" href={`https://twitter.com/${info.twitter}`} aria-label="Twitter">
                                               <Icon name="twitter" className={iconSun} />
                                          </a>)}
                                          {info.facebook && (<a className="mx-2" href={`https://facebook.com/${info.facebook}`} aria-label="Facebook">
                                               <Icon name="facebook" className={iconSun} />
                                          </a>)}
                                          {info.instagram && (<a className="mx-2" href={`https://instagram.com/${info.instagram}`} aria-label="Instagram">
                                               <Icon name="instagram" className={iconSun} />
                                          </a>)}
                                     </div>
                                 </div>
                             </div>
                          </div>
                      </div>
                 </section>
          </React.Fragment>
     );
}

About.layout = page => <Layout children={page} header={'About Us'} showHero={true} />

export default About;
