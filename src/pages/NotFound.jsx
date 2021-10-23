import React from 'react';
import SEO from 'react-seo-component';

const NotFound = () => (
  <div className="container-xl">
		<SEO
			title="Not found"
			titleTemplate="Matias Cardone"
			titleSeparator={`-`}
			description={"Page not found. Error 404" || 'nothin’'}
		/>
    <h1>
			Page not found. Error 404.
			
			</h1>
  </div>
);

export default NotFound;
