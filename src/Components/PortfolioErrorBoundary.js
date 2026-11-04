import React from 'react';

export default class PortfolioErrorBoundary extends React.Component {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error, info) {
        console.error('Portfolio failed to render', error, info);
    }

    render() {
        if (this.state.failed) {
            return (
                <main className="startup-fallback">
                    <h1>Luca Imesch</h1>
                    <p>The portfolio could not load. Please reload the page, or contact me by email.</p>
                    <a href="mailto:luca-imesch@hotmail.ch">luca-imesch@hotmail.ch</a>
                </main>
            );
        }
        return this.props.children;
    }
}
