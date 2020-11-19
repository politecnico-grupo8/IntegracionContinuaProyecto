pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install'
        bat 'ng build --prod'
      }
    }
    stage('deploy') {
      steps {
        bat 'firebase deploy'
      }
    }
  }
}
