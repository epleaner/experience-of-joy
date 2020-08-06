import '@styles/styles.css';
import { PageTransition } from 'next-page-transitions';
import Loader from '@components/Loader';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <PageTransition
        timeout={300}
        classNames='h-full w-full page-transition'
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{
          enter: 400,
          exit: 0,
        }}
        loadingClassNames='loading-indicator'>
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </>
  );
}

export default MyApp;
