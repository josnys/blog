import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import TextInput from '@/Shared/Site/TextInput';
import TextArea from '@/Shared/Site/TextArea';
import LoadingButton from '@/Shared/Site/LoadingButton';
import Layout from '@/Shared/Site/Layout';
import TitleSeparator from '@/Shared/Site/TitleSeparator';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const About = () => {
     const { app, auth, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          name: '',
          email: '',
     });

     const iconSun = classNames('w-8 h-8', {
          'text-slate-300 fill-current': false,
          'text-slate-300 hover:text-red-700 focus:text-red-700 fill-current': true
     });

     function handlesuubmit(e) {
          e.preventdefault();
          post(route('site.contact'));
     }

     return (
          <React.Fragment key="app">
               <Helmet title={info.page_title} />
               <section className="w-full pt-8 bg-slate-200 dark:bg-slate-600 dark:text-red-500">
                    <div className="container mx-auto p-4">
                         <article className="w-full">
                              <h1 className="text-center text-4xl font-semibold text-red-800 dark:text-red-500">{info.title}</h1>
                              <h3 className="text-center font-light italic text-gray-600 dark:text-gray-700">{info.slogan}</h3>
                              <TitleSeparator />
                              <div className="mt-4 prose max-w-none prose-p:w-full prose-p:p-0 text-gray-700 dark:text-gray-300 text-justify text-ellipsis">
                                   <article dangerouslySetInnerHTML={{__html: info.content}}></article>
                              </div>
                         </article>
                    </div>
               </section>

               <section className="w-full pt-8 bg-slate-50 dark:bg-slate-500">
                    <div className="container px-6 py-8 mx-auto">
                         <form onSubmit={handlesuubmit}>
                              <div className="mt-6 max-w-2xl mx-auto rounded bg-white dark:bg-slate-600 p-4 border border-red-300">
                                   <h1 className="text-center text-4xl font-semibold text-red-800 dark:text-red-500">{info.page_title}</h1>
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
                                   <div className="w-full">
                                        <div className="w-full flex space-x-4">
                                             <TextInput
                                                  className="form-input rounded-md mt-4 w-full md:w-1/2"
                                                  label="Name"
                                                  name="name"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.name}
                                                  value={data.name}
                                                  onChange={e => setData('name', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md mt-4 w-full md:w-1/2"
                                                  label="E-mail"
                                                  name="email"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.email}
                                                  value={data.email}
                                                  onChange={e => setData('email', e.target.value)}
                                             />
                                        </div>

                                        <TextArea
                                             className="form-input rounded-md mt-4 w-full"
                                             label="Description"
                                             name="description"
                                             disable={false}
                                             readonly={false}
                                             must={true}
                                             focus={false}
                                             errors={errors.description}
                                             value={data.description}
                                             onChange={e => setData('description', e.target.value)}
                                        />
                                   </div>

                                   <div className="flex justify-center mt-6">
                                        <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                             Send Message
                                        </LoadingButton>
                                   </div>
                              </div>
                         </form>
                    </div>
                 </section>
          </React.Fragment>
     );
}

About.layout = page => <Layout children={page} header={'About Us'} showHero={false} />

export default About;
