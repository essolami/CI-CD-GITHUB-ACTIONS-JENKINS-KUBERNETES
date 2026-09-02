pipeline {

    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Checkout source code'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                echo '📦 Installing dependencies'
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo '🔍 Checking code quality'
                sh 'npm run lint'
            }
        }

        stage('Unit Tests') {
            steps {
                echo '🧪 Running unit tests'
                sh 'npm test -- --run'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building React application'
                sh 'npm run build'
            }
        }
    }

    post {

        success {
            echo '✅ All CI checks passed'
        }

        failure {
            echo '❌ CI pipeline failed'
        }

        always {
            echo '📝 Cleaning workspace'
            cleanWs()
        }
    }
}