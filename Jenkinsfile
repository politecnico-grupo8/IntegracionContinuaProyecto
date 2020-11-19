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
         bat 'firebase login:ci'
         bat 'firebase deploy'
      }
    }
  }
}
