module.exports = {
    branches: 'master',
    repositoryUrl: 'https://github.com/loteresa2/react-app-github-action',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
    ],
}
