import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | undefined;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Eliminates Boilerplate',
    Svg: undefined,//require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Stop writing boring boilerplate or code that crashes on runtime. <p/> Power of compile-time 
        introspection makes C# feel like a dynamic language while still retaining performance and correctness
        of a static one.
      </>
    ),
  },
  {
    title: 'Compatible With Everything',
    Svg: undefined,//require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get C# 11 on any Unity version starting from 2019. No runtime support needed &mdash;
        both IL2CPP and Mono just work.
        <p/>
        Also usable on standalone C# projects, like your game's server or Blazor-based website.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: undefined,//require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All generated and transformed code is fully visible and debugable in your IDE.
        <p/>
        Something missing? No problems! Adding your own compiler extensions is a breeze.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg !== undefined ? <Svg className={styles.featureSvg} role="img" /> : null}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
