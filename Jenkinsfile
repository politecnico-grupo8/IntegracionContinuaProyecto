pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run ng build'
      }
    }

    stage('deploy') {
      steps {
        bat 'npm install -g firebase-tools'
        powershell 'firebase deploy'
      }
    }

  }
}