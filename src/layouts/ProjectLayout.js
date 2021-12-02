import * as React from 'react';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.sections || [];

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {page.title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {page.title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return (
                                <div key={index} data-sb-field-path={`sections.${index}`}>
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
