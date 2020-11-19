pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run --build'
      }
    }
    stage('deploy') {
      steps {
        bat 'firebase deploy'
      }
    }
  }
}
