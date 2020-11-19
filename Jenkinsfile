pipeline {
  agent any
  stages {
    stage('build') {
      steps {
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
