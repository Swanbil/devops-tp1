pipeline {
  agent any
    environment {
        CI = 'true'
    }
  tools {nodejs "nodejs"}
  stages {     
    stage('Example') {
      steps {
        sh 'npm config ls'
      }
    }
    stage('Build') {
      steps {
        sh 'ls'
        sh 'cd client;npm install'
      }
    }  
    stage('Test') {
      steps {  
        echo 'Test'
      }
    }
  }
}