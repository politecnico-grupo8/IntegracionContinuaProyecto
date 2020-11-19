pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install ng build --prod'
      }
    }
    stage('deploy') {
      steps {
        bat 'npm install -g firebase-tools'
        bat 'firebase login: ci'
        bat 'firebase init'
        bat 'firebase deploy'
      }
    }
  }
}
