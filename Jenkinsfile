pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run ng test -- --watch=false --code-coverage'
      }
    }

    stage('build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run ng build'
      }
    }

    stage('deploy') {
      steps {
        bat 'XCopy dist\\ C:\\inetpub\\wwwroot\\dist\\'
      }
    }

  }
}