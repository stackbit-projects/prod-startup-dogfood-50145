import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getComponent } from '../../components-registry';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="colors-a px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            <div className="text-lg mb-4">
                                <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                    {formattedDate}
                                </time>
                            </div>
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                            {page.author && postAuthor(page.author)}
                        </header>
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return (
                                <div key={index} data-sb-field-path={`bottomSections.${index}`}>
                                    <Component {...section} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function postAuthor(author) {
    return (
        <div className="text-lg mt-6">
            By{' '}
            <span data-sb-field-path="author">
                {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
                {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
            </span>
        </div>
    );
}



import React from 'react';
import _ from 'lodash';

import components, { Layout } from '../components/index';
import { getPageUrl } from '../utils';

export default class Project extends React.Component {
    renderProjectNavLinks(project, index, projects, projectCount, currentProjectUrl) {
        const projectUrl = getPageUrl(project);
        if (projectUrl !== currentProjectUrl) {
            return null;
        }
        const prevIndex = index - 1;
        const prevProject = (index !== 0) ? projects[prevIndex] : null;
        const nextIndex = index + 1;
        const nextProject = (index < projectCount - 1) ? projects[nextIndex] : null;

        return (
            <div className="grid portfolio-feed portfolio-feed--tiles">
                {prevProject && <PortfolioItem project={prevProject} />}
                {nextProject && <PortfolioItem project={nextProject} />}
            </div>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const sections = _.get(page, 'sections');
        const projectUrl = getPageUrl(page);
        const projects = _.orderBy(_.get(this.props, 'projects', []), 'date', 'desc');
        const projectCount = _.size(projects);

        return (
            <Layout page={page} config={config}>
                <article className="project">
                    <header className="project__header">
                        <div className="container container--md">
                            <h1 className="project__title line-top">{title}</h1>
                            {subtitle && (
                                <div className="project__subtitle">
                                    {subtitle}
                                </div>
                            )}
                        </div>
                    </header>
                    <div className="project__body">
                        {_.map(sections, (section, index) => {
                            const sectionType = _.get(section, 'type');
                            const component = _.upperFirst(_.camelCase(sectionType));
                            if (!component) {
                                throw new Error(`page section does not have the 'type' property, page: ${projectUrl}`);
                            }
                            const Component = components[component];
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${sectionType}`);
                            }
                            return <Component key={index} section={section} data={data} />;
                        })}
                    </div>
                </article>
                {(projectCount > 1) && (
                    <nav className="section section--portfolio">
                        <div className="container container--lg">
                            <h2 className="section__title line-top">More Projects</h2>
                            {_.map(projects, (project, index) => (
                                <React.Fragment key={index}>
                                    {this.renderProjectNavLinks(project, index, projects, projectCount, projectUrl)}
                                </React.Fragment>
                            ))}
                        </div>
                    </nav>
                )}
            </Layout>
        );
    }
}
