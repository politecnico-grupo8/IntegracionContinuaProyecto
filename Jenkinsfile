pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm install ng build --prod ng serve'
      }
    }
  }
}
